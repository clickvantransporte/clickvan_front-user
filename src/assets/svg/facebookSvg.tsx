import { SvgXml } from 'react-native-svg'

export default function FacebookSvg({width, height}: any) {
    return (
        <SvgXml width={width} height={height}
        xml={`
            <svg viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="34" rx="17" fill="#1877F2"/>
                <path d="M24.312 21.9141L25.0879 17H20.2344V13.8125C20.2344 12.4678 20.9111 11.1562 23.085 11.1562H25.293V6.97266C25.293 6.97266 23.29 6.64062 21.376 6.64062C17.377 6.64062 14.7656 8.99473 14.7656 13.2547V17H10.3223V21.9141H14.7656V33.7941C15.6577 33.9303 16.5703 34 17.5 34C18.4297 34 19.3423 33.9303 20.2344 33.7941V21.9141H24.312Z" fill="white"/>
            </svg>
        `}
        />
    )
}