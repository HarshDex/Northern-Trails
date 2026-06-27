'use client';

export default function ShopNotifyForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        aria-label="Email address for shop launch notification"
        className="flex-1 rounded-full border border-border bg-cream px-5 py-3 text-sm text-charcoal placeholder-charcoal/40 focus:border-saffron/50 focus:outline-none transition-colors"
      />
      <button
        type="submit"
        className="rounded-full bg-saffron px-7 py-3 text-sm font-semibold text-white hover:bg-saffron/90 transition-colors flex-shrink-0"
      >
        Notify Me
      </button>
    </form>
  );
}
