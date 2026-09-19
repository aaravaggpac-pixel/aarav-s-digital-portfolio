/**
 * Monochrome light field — one fixed layer behind the entire app.
 *
 * Mounted once in App so it runs continuously beneath the floating nav and
 * every page; a per-page wash left a visible seam at the bar's lower edge.
 *
 * Frost only reads as frost when the surface behind it varies, so this
 * supplies both gradient tone and crisp hairline edges — in greys only — for
 * the glass panes above it to bend.
 */
export function Wash() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Tonal field */}
      <div className="absolute -top-52 left-[1%] h-[46rem] w-[46rem] rounded-full bg-white blur-[90px]" />
      <div className="absolute -right-[8%] -top-[6%] h-[40rem] w-[40rem] rounded-full bg-label/[0.16] blur-[100px]" />
      <div className="absolute bottom-[-20%] left-[10%] h-[38rem] w-[38rem] rounded-full bg-label/[0.13] blur-[110px]" />
      <div className="absolute bottom-[2%] right-[0%] h-[28rem] w-[28rem] rounded-full bg-white blur-[70px]" />
      <div className="absolute left-[34%] top-[28%] h-[24rem] w-[24rem] rounded-full bg-label/[0.09] blur-[80px]" />

      {/* Hairline rings — crisp edges give the frost something to bend */}
      <div className="absolute -right-[14%] top-[4%] h-[34rem] w-[34rem] rounded-full border border-label/[0.07]" />
      <div className="absolute -right-[6%] top-[16%] h-[22rem] w-[22rem] rounded-full border border-label/[0.06]" />
      <div className="absolute -left-[12%] bottom-[-8%] h-[30rem] w-[30rem] rounded-full border border-label/[0.06]" />
    </div>
  );
}
