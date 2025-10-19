import Card from "./Card";

export default function Main({theme}){
    const data = [
        {
            title: 'DevLens',
            text: 'Quickly inspect page layouts and visualize element boundaries.',
            image: './src/assets/images/logo-devlens.svg',
            active: true
        },
        {
            title: 'StyleSpy',
            text: 'Instantly analyze and copy CSS from any webpage element.',
            image: './src/assets/images/logo-style-spy.svg',
            active: true
        },
        {
            title: 'SpeedBoost',
            text: 'Optimizes browser resource usage to accelerate page loading.',
            image: './src/assets/images/logo-speed-boost.svg',
            active: false
        },
        {
            title: 'JSONWizard',
            text: 'Formats, validates, and prettifies JSON responses in-browser.',
            image: './src/assets/images/logo-json-wizard.svg',
            active: true
        },
        {
            title: 'TabMaster Pro',
            text: 'Organizes browser tabs into groups and sessions.',
            image: './src/assets/images/logo-tab-master-pro.svg',
            active: true
        },
        {
            title: 'ViewportBuddy',
            text: 'Simulates various screen resolutions directly within the browser.',
            image: './src/assets/images/logo-viewport-buddy.svg',
            active: false
        },
        {
            title: 'Markup Notes',
            text: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
            image: './src/assets/images/logo-markup-notes.svg' ,
            active: true
        },
        {
            title: 'GridGuides',
            text: 'Overlay customizable grids and alignment guides on any webpage.',
            image: './src/assets/images/logo-grid-guides.svg',
            active: false
        },
        {
            title: 'Palette Picker',
            text: 'Instantly extracts color palettes from any webpage.',
            image: './src/assets/images/logo-palette-picker.svg',
            active: true
        },
        {
            title: 'LinkChecker',
            text: 'Scans and highlights broken links on any page.',
            image: './src/assets/images/logo-link-checker.svg',
            active: true
        },
        {
            title: 'DOM Snapshot',
            text: 'Capture and export DOM structures quickly.',
            image: './src/assets/images/logo-dom-snapshot.svg',
            active: false
        },
        {
            title: 'ConsolePlus',
            text: 'Enhanced developer console with advanced filtering and logging.',
            image: './src/assets/images/logo-console-plus.svg',
            active: true
        }
    ];

    return (
        <div id="main" className="mt-[20px] w-[125vh]">
            {data.map((el, i) => <Card key={i} title={el.title} text={el.text} image={el.image} theme={theme} active={el.active}/>)}
        </div>
    )
}