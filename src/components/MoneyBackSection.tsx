import { Shield, MousePointerClick, DollarSign, CheckCircle } from "lucide-react";

const MoneyBackSection = () => {
  return (
    <section className="section bg-gradient-to-b from-green-50 to-background">
      <div className="container-neurotool">
        {/* Hero Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-black tracking-tight">100% MONEY-BACK GUARANTEE</span>
          </div>
          <h2 className="heading-2 mb-4">
            Risk-Free. No Questions Asked.
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-foreground font-medium">
            We're so confident in our work that we offer a <span className="text-green-600 font-bold">complete money-back guarantee</span>. If you're not satisfied, getting your money back is simple and hassle-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center hover:border-green-400 transition-colors shadow-sm">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <MousePointerClick className="w-8 h-8 text-green-600" />
            </div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              INSTANT
            </div>
            <h3 className="text-xl font-bold mb-3">One-Click Refund</h3>
            <p className="text-sm text-muted-foreground">
              No complicated forms or lengthy processes. Request a refund with a single click through your dashboard.
            </p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center hover:border-green-400 transition-colors shadow-sm">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              FLEXIBLE
            </div>
            <h3 className="text-xl font-bold mb-3">Full or Partial Refund</h3>
            <p className="text-sm text-muted-foreground">
              Ordered 20 articles but only got 10? We'll refund you for the undelivered articles. Simple as that.
            </p>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center hover:border-green-400 transition-colors shadow-sm">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
              NO QUESTIONS
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              Not happy with the quality? Full refund, no questions asked. Your satisfaction is our priority.
            </p>
          </div>
        </div>

        {/* Bottom Promise Box */}
        <div className="bg-gradient-to-br from-green-600 to-green-500 text-white rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6" />
            <span className="text-sm font-bold tracking-wider uppercase">Our Iron-Clad Promise</span>
          </div>
          <p className="text-lg leading-relaxed">
            We believe in complete transparency and customer satisfaction. If you decide to stop your order midway—say, after 10 out of 20 articles—<strong className="font-black">we'll refund the remaining balance immediately</strong>. No hidden fees, no complicated paperwork, no waiting period. Just a fair and honest refund policy that puts YOU first.
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Instant Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Questions Asked</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>100% Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyBackSection;
