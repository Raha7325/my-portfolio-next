import { usePinkinator } from '../hooks/usePinkinator';

const projects = [
    {
        name: 'My Portfolio',
        desc: 'This portfolio site — built with Next.js 14, Tailwind CSS, and deployed on GitHub Pages.',
        tech: ['Next.js', 'React', 'Tailwind CSS'],
        url: 'https://github.com/Raha7325/my-portfolio-next',
    },
     {
        name: 'Pinkinator',
        desc: 'An npm package that generates random pink colors. Built and published to the npm registry.',
        tech: ['TypeScript', 'Vite', 'npm'],
        url: 'https://www.npmjs.com/package/pinkinator',
    },
    {
        name: 'SafarAra',
        desc: 'A full-service online travel agency (OTA) platform for flight bookings, hotel reservations, tours, and visa services.',
        tech: ['Next.js', 'React', 'TypeScript', 'ShadCn', 'Directus'],
        url: 'https://safarara.com',
    },
    {
        name: 'Google Translate',
        desc: 'A translation app built with Vue 3 and TypeScript, integrating external APIs. Originally developed as a technical challenge for Chabok.',
        tech: ['Vue 3', 'TypeScript', 'Axios', 'Tailwind CSS'],
        url: 'https://github.com/Raha7325/GoogleTranslate',
    },
    {
        name: 'Monthly Lottery',
        desc: 'A React-based lottery application for monthly draw management.',
        tech: ['React', 'JavaScript'],
        url: 'https://github.com/Raha7325/monthly-lottery',
    },
];

const skills = [
    'React', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Git',
    'REST APIs', 'Axios', 'Pinia', 'ESLint', 'Responsive Design',
    'UI/UX Design',
];

const About = () => {
    const accent = usePinkinator([]);

    return (
        <div className="max-w-4xl mx-auto mt-12 mb-12">
            <div className="mb-2" style={{ width: '80px', height: '4px', backgroundColor: accent, borderRadius: '2px' }} />
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">About Me</h1>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                <p className="text-2xl font-medium text-gray-800">
                    I'm Raha — a FrontEnd Developer who turns ideas into intuitive, pixel-perfect web experiences.
                </p>
                <p>
                    I'm a frontend developer based in Tehran, currently working at <strong>Chabok</strong>, where I build and maintain responsive, user-friendly web applications. My day-to-day involves crafting UIs with <strong>React</strong> and <strong>Vue.js</strong>, writing clean <strong>TypeScript</strong>, and styling with <strong>Tailwind CSS</strong>.
                </p>
                <p>
                    I believe great design is invisible — the best interfaces are the ones you don't have to think about. That's why I obsess over the details: smooth transitions, consistent spacing, accessible markup, and performance that doesn't compromise quality. Every project is an opportunity to make something that people enjoy using.
                </p>
                <p>
                    Before joining Chabok, I built projects ranging from a Google Translate clone (Vue 3 + TypeScript) to a monthly lottery app (React), always pushing myself to learn new tools and patterns. I'm equally comfortable in the React and Vue ecosystems, and I'm always exploring what's next.
                </p>
                <p>
                    Outside of code, you'll find me reading, spending time in nature, or working on creative side projects. I'm driven by curiosity — if I don't know how something works, I have to take it apart and figure it out.
                </p>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                            style={{ backgroundColor: `${accent}22` }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((p) => (
                        <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1"
                            style={{ borderColor: `${accent}33`, backgroundColor: `${accent}08` }}
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{p.name}</h3>
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{p.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded text-gray-600" style={{ backgroundColor: `${accent}22` }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default About;