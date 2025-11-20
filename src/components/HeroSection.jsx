import React from "react";

export default function HeroSection() {
  return (
    <section style={{padding:'48px 16px', background:'#000', color:'#fff', minHeight:'240px'}}>
      <div style={{maxWidth:1120, margin:'0 auto', display:'flex', alignItems:'center', gap:20}}>
        <div>
          <p style={{textTransform:'uppercase', color:'#9CA3AF', fontSize:12}}>Trusted by sovereign enterprises</p>
          <h1 style={{fontSize:32, margin:'8px 0'}}>Hibiscus AI — On-device intelligence</h1>
          <p style={{color:'#CBD5E1', maxWidth:560}}>Run advanced AI inside your firewalls. Low-latency, high-control, built for enterprise data sovereignty.</p>
          <a href="/demo" style={{display:'inline-block', marginTop:16, padding:'10px 18px', background:'#4F46E5', color:'#fff', borderRadius:12}}>Request Demo</a>
        </div>
        <div aria-hidden style={{flex:1, display:'flex', justifyContent:'flex-end'}}>
          <div style={{width:240, height:140, background:'#111827', borderRadius:12}}></div>
        </div>
      </div>
    </section>
  );
}
