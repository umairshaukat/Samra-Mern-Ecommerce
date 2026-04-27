import React from 'react'

const SaasStudio = () => {
  const stack = [
    { area: 'Frontend', choice: 'Next.js + Tailwind + Auth pages + editor UI' },
    { area: 'API', choice: 'Node.js (Express/Nest) with JWT auth + usage metering' },
    { area: 'Generation', choice: 'Python workers + queue (BullMQ/SQS) for long video jobs' },
    { area: 'AI Video', choice: 'Model gateway to Runway/Pika/Stable Video endpoints' },
    { area: 'Voice', choice: 'Voice-clone + TTS providers with selectable voice catalog' },
    { area: 'Storage', choice: 'S3/R2 for media + PostgreSQL for users/projects/jobs' },
    { area: 'Billing', choice: 'Stripe subscriptions + credit packs + webhook sync' },
  ]

  const milestones = [
    'Week 1-2: Auth, subscriptions, project dashboard, job queue infrastructure.',
    'Week 3-4: Prompt-to-script, scene splitter, image/video generation pipeline.',
    'Week 5-6: Voice upload, cloning flow, voiceover marketplace selector, timeline merge.',
    'Week 7-8: Rendering, watermarking, exports, analytics, retries, moderation.',
  ]

  return (
    <div className='max-w-5xl mx-auto py-10 text-gray-700'>
      <h1 className='text-2xl sm:text-3xl font-semibold text-black'>
        AI Cartoon Video SaaS Blueprint
      </h1>
      <p className='mt-4 leading-7'>
        Yes — this can be built as a production SaaS. The best approach is a job-based architecture where a user enters a
        prompt, chooses a voice (or uploads their own), and the system generates scenes, voiceover, and a final rendered
        cartoon video.
      </p>

      <section className='mt-8'>
        <h2 className='text-xl font-semibold text-black'>1) Suggested tech stack</h2>
        <div className='mt-4 grid sm:grid-cols-2 gap-3'>
          {stack.map((item) => (
            <div key={item.area} className='border rounded-lg p-4'>
              <p className='font-semibold text-black'>{item.area}</p>
              <p className='text-sm mt-1'>{item.choice}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-8'>
        <h2 className='text-xl font-semibold text-black'>2) Core workflow</h2>
        <ol className='list-decimal pl-6 mt-3 space-y-2 leading-7'>
          <li>User creates a project and enters a text prompt.</li>
          <li>LLM converts prompt into script, storyboard, and per-scene shot list.</li>
          <li>Video service generates animated scenes in parallel.</li>
          <li>User picks voice from marketplace or uploads a custom voice sample.</li>
          <li>TTS service generates narration and optional character dialogue tracks.</li>
          <li>Renderer merges scenes + audio + subtitles + music with FFmpeg.</li>
          <li>Final mp4 is stored, signed URL is returned, credits are deducted.</li>
        </ol>
      </section>

      <section className='mt-8'>
        <h2 className='text-xl font-semibold text-black'>3) Delivery plan (8 weeks MVP)</h2>
        <ul className='list-disc pl-6 mt-3 space-y-2'>
          {milestones.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className='mt-8 bg-slate-50 border rounded-lg p-5'>
        <h2 className='text-xl font-semibold text-black'>Can I build a complete system for you?</h2>
        <p className='mt-2 leading-7'>
          I can build this end-to-end iteratively: product spec, DB schema, backend services, queue workers, generation
          pipeline, and frontend studio. Start with an MVP scope first, then expand to team collaboration, API access,
          brand kits, and enterprise controls.
        </p>
        <p className='mt-3 text-sm'>
          Next step: finalize providers (video + TTS), pricing model (credits/minutes), and legal policy for voice cloning.
        </p>
      </section>
    </div>
  )
}

export default SaasStudio
