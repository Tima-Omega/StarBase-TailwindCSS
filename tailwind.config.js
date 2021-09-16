module.exports = {
    mode: 'jit', // Just-In-Time Compiler
    purge: ['./src/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
		container: {
            center: true,
            padding: '1rem'
        },
		fontFamily: {
			'Montserrat': ['Montserrat']
		},
		fontSize: {
			'xs': '.75rem',
       		'sm': '.875rem',
			'base': '1rem',
			'13': '0.813rem',
			'26': '1.625rem',
			'28': '1.75rem',
			'6xl': '3.75rem',
			'8xl': '6rem',
		},
        extend: {
			screens: {
				// sm: "576px",
				// md: "768px",
				lg: "992px",
				xl: "1120px",
				'2xl': "1360px"
			},
			colors: {
				'main-bg': '#C4C4C4',
				'grey': '#E2D7D7',
				'main': '#4E0EBA',
				'main-blue': '#2587E5',
				'border': '#F3F7F9',
				'main-text': '#494961',
				"second-blue": '#2D8FEC',
				'main-purple': '#7D33F7',
				"main-grad": '#8843FB',
				'sec-grad': '#2D8FEC',
				'sec-gray': '#DFE8EB',
				'sec-border': '#E3EEF3',
				'grad-footer': '#1F0762',
				'grad-footer-sec': '#160434',
				'third-border': '#9286B4',
				'line': '#E3EEF4',
				'footer-fill': '#D1C1EC'
			},
			borderRadius: {
                '10': '0.625rem'
            },
			boxShadow: {
                'first': '5px 5px 25px rgba(54, 177, 255, 0.075)',
                'sec': '10px 10px 25px rgba(61, 155, 243, 0.35)',
                'third': '0 15px 35px rgba(209, 218, 222, 0.2)',
				'fourth': '5px 5px 15px rgba(136, 67, 251, 0.55)',
				'five': '0px 0px 10px 4px rgba(40, 86, 107, 0.03), 15px 15px 25px rgba(40, 86, 107, 0.07)',
            },
			zIndex: {
				'-1': '-1'
			},
			spacing: {
				'xs': '0.188rem',
				's': '0.313rem',
				'15': '15%',
				'55': '55%',
			},
			backgroundImage: {
				'anchor': "url(../img/anchor.svg)"
			}
		},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
