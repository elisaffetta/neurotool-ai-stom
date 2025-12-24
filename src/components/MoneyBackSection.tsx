import { Shield, MousePointerClick, DollarSign, CheckCircle } from "lucide-react";

const MoneyBackSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-green-50 to-background">
      <div className="container-neurotool">
        {/* Hero Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-xl shadow-lg mb-4 transform hover:scale-105 transition-transform">
            <Shield className="w-6 h-6" />
            <span className="text-lg md:text-xl font-black tracking-tight">100% MONEY-BACK GUARANTEE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Risk-Free. No Questions Asked.
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-foreground font-medium">
            We're so confident in our work that we offer a <span className="text-green-600 font-bold">complete money-back guarantee</span>. If you're not satisfied, getting your money back is simple and hassle-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-green-200 rounded-xl p-4 text-center hover:border-green-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <MousePointerClick className="w-6 h-6 text-green-600" />
            </div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
              INSTANT
            </div>
            <h3 className="text-lg font-bold mb-2">One-Click Refund</h3>
            <p className="text-xs text-muted-foreground">
              No complicated forms or lengthy processes. Request a refund with a single click through your dashboard.
            </p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-xl p-4 text-center hover:border-green-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
              FLEXIBLE
            </div>
            <h3 className="text-lg font-bold mb-2">Full or Partial Refund</h3>
            <p className="text-xs text-muted-foreground">
              Ordered 20 articles but only got 10? We'll refund you for the undelivered articles. Simple as that.
            </p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-xl p-4 text-center hover:border-green-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
              NO QUESTIONS
            </div>
            <h3 className="text-lg font-bold mb-2">Quality Guarantee</h3>
            <p className="text-xs text-muted-foreground">
              Not happy with the quality? Full refund, no questions asked. Your satisfaction is our priority.
            </p>
          </div>
        </div>

        {/* Bottom Promise Box */}
        <div className="bg-gradient-to-br from-green-600 to-green-500 text-white rounded-xl p-6 text-center max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase">Our Iron-Clad Promise</span>
          </div>
          <p className="text-base leading-relaxed">
            We believe in complete transparency and customer satisfaction. If you decide to stop your order midway—say, after 10 out of 20 articles—<strong className="font-black">we'll refund the remaining balance immediately</strong>. No hidden fees, no complicated paperwork, no waiting period. Just a fair and honest refund policy that puts YOU first.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              <span>Instant Processing</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              <span>No Questions Asked</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              <span>100% Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyBackSection;
