import { usePinkinator } from '../hooks/usePinkinator';

const CANVA_EMBED = 'https://www.canva.com/design/DAF-hI9cazk/vcbGZqtizElL6-uU-pER8Q/view?embed';
const CANVA_LINK = 'https://www.canva.com/design/DAF-hI9cazk/vcbGZqtizElL6-uU-pER8Q/view';

const CV = () => {
    const accent = usePinkinator([]);

    return (
        <div className="max-w-4xl mx-auto mt-12 mb-12">
            <div className="mb-2" style={{ width: '80px', height: '4px', backgroundColor: accent, borderRadius: '2px' }} />
            <h1 className="text-5xl font-bold mb-3 text-gray-800">Resume / CV</h1>
            <p className="text-lg text-gray-600 mb-8">
                Always up-to-date — powered by Canva.
            </p>

            <div className="relative w-full rounded-xl overflow-hidden shadow-lg border" style={{ borderColor: `${accent}44` }}>
                <div className="relative w-full" style={{ paddingTop: '141.4%' }}>
                    <iframe
                        src={CANVA_EMBED}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        title="My Resume"
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-center">
                <a
                    href={CANVA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:scale-105 shadow-md"
                    style={{ backgroundColor: accent }}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Open in Canva
                </a>
            </div>
        </div>
    )
}
export default CV;