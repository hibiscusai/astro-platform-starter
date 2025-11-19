import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * HeroSection (Hybrid Approach)
 * - Single-file React component ready for a Tailwind CSS project.
 * - Designed to map into the "hybrid website approach" (Hero, Trust, Value Pillars...)
 * - Variant-aware: 'landing' | 'corporate' | 'technical' | 'visionary'
 * - Accessible, responsive, and easy to plug into your repo.
 *
 * Usage:
 * <HeroSection
 *   variant="landing"
 *   title={<><strong>Hibiscus AI</strong> — Private, on-device intelligence</>}
 *   eyebrow="Trusted by enterprises"
 *   subtitle="A distributed on-prem AI stack that keeps your data within your walls."
 *   ctas={[{label:'Get Demo', href:'/demo', primary:true},{label:'Docs', href:'/docs'}]}
 *   stats={[{label:'Nodes', value:'1,024'},{label:'Uptime', value:'99.99%'}]}
 *   imageSrc="/public/hero-illustration.png"
 * />
 */

export default function HeroSection({
  variant = "landing",
  eyebrow = "",
  title = "",
  subtitle = "",
  ctas = [],
  stats = [],
  imageSrc = null,
}) {
  const variants = {
    landing: {
      headingSize: "text-4xl md:text-6xl",
      leadSize: "text-lg md:text-xl",
      imagePriority: true,
    },
    corporate: {
      headingSize: "text-3xl md:text-5xl",
      leadSize: "text-base md:text-lg",
      imagePriority: false,
    },
    technical: {
      headingSize: "text-2xl md:text-4xl",
      leadSize: "text-sm md:text-base",
      imagePriority: false,
    },
    visionary: {
      headingSize: "text-5xl md:text-7xl",
      leadSize: "text-xl md:text-2xl",
      imagePriority: true,
    },
  }[variant] || variants.landing;

  return (
    <header className="bg-gradient-to-br from-neutral-900 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 lg:col-span-6"
          >
            {eyebrow && (
              <p className="mb-4 text-sm uppercase tracking-widest text-slate-300">
                {eyebrow}
              </p>
            )}

            <h1 className={`${variants.headingSize} font-extrabold leading-tight tracking-tight`}>
              {title}
            </h1>

            {subtitle && (
              <p className={`${variants.leadSize} mt-6 text-slate-300 max-w-2xl`}>
                {subtitle}
              </p>
            )}

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {ctas.map((cta, idx) => (
                <a
                  key={idx}
                  href={cta.href}
                  className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ${
                    cta.primary
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                      : "bg-white/6 hover:bg-white/10 text-white"
                  }`}
                >
                  <span>{cta.label}</span>
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>

            {/* Micro-trust / stats row */}
            {stats.length > 0 && (
              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <dt className="text-sm">{s.label}</dt>
                    <dd className="font-semibold text-lg">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="md:col-span-5 lg:col-span-6 flex justify-center md:justify-end"
          >
            <div
              className={`w-full max-w-md md:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-white/6 p-4 bg-gradient-to-b from-white/3 to-white/2 ${
                variants.imagePriority ? "md:w-[520px]" : "md:w-[420px]"
              }`}
              aria-hidden={!imageSrc}
            >
              {imageSrc ? (
                // responsive image wrapper
                <img
                  src={imageSrc}
                  alt="Hero illustration"
                  className="w-full h-auto block object-cover rounded-lg"
                />
              ) : (
                // fallback decorative SVG (chakra motif)
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-48 h-48 opacity-90"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Decorative chakra"
                  >
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0" stopColor="#a78bfa" />
                        <stop offset="1" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="78" fill="none" stroke="url(#g)" strokeWidth="6" />
                    <g transform="translate(100 100)">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <line
                          key={i}
                          x1={0}
                          y1={0}
                          x2={0}
                          y2={-78}
                          transform={`rotate(${(360 / 12) * i})`}
                          stroke="url(#g)"
                          strokeWidth={4}
                          strokeLinecap="round"
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Subnav row that maps to the "hybrid" structure */}
        <nav className="mt-10 flex flex-wrap gap-4 items-center text-sm text-slate-400">
          <a className="hover:text-white" href="#trust">Trust</a>
          <a className="hover:text-white" href="#value-pillars">Value Pillars</a>
          <a className="hover:text-white" href="#industry-solutions">Industry Solutions</a>
          <a className="hover:text-white" href="#platform">Platform</a>
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white ml-auto" href="#case-studies">Case Studies</a>
        </nav>
      </div>
    </header>
  );
}
