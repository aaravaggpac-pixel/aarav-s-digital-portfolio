"""Extract embedded images from PDF files using PyMuPDF (fitz)."""
from __future__ import annotations

from pathlib import Path
import argparse
import fitz  # PyMuPDF

DEFAULT_DOCS_DIR = Path("public/docs")
DEFAULT_OUTPUT_DIR = Path("public/images")


def extract_images_from_pdf(pdf_path: Path, output_dir: Path) -> int:
    """Save each embedded image from ``pdf_path`` into ``output_dir``.

    Returns the number of images extracted.
    """
    doc = fitz.open(pdf_path)
    output_dir.mkdir(parents=True, exist_ok=True)
    extracted = 0

    for page_index in range(len(doc)):
        page = doc[page_index]
        for img_index, img in enumerate(page.get_images(full=True), start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_path = output_dir / f"{pdf_path.stem}_page{page_index + 1}_img{img_index}.{image_ext}"
            image_path.write_bytes(image_bytes)
            extracted += 1

    return extracted


def extract_images_from_all_pdfs(source_dir: Path, output_dir: Path) -> None:
    """Run extraction for every PDF in ``source_dir``."""
    pdf_files = sorted(source_dir.glob("*.pdf"))
    if not pdf_files:
        print(f"No PDF files found in {source_dir}")
        return

    for pdf_path in pdf_files:
        target_dir = output_dir / pdf_path.stem
        count = extract_images_from_pdf(pdf_path, target_dir)
        print(f"  - {pdf_path.name}: {count} image(s) → {target_dir}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Extract images from a PDF file or every PDF inside a directory."
    )
    parser.add_argument(
        "--pdf",
        type=Path,
        help="Single PDF file to process (skips directory scan).",
    )
    parser.add_argument(
        "--docs-dir",
        type=Path,
        default=DEFAULT_DOCS_DIR,
        help=f"Directory containing PDF files to scan (default: {DEFAULT_DOCS_DIR}).",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help=f"Base directory to store extracted images (default: {DEFAULT_OUTPUT_DIR}).",
    )
    args = parser.parse_args()

    if args.pdf:
        count = extract_images_from_pdf(args.pdf, args.output_dir / args.pdf.stem)
        print(f"Extracted {count} image(s) from {args.pdf.name} to {args.output_dir / args.pdf.stem}")
    else:
        extract_images_from_all_pdfs(args.docs_dir, args.output_dir)


if __name__ == "__main__":
    main()
