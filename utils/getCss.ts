import { readFileSync } from "fs"
import getPattern from "./bg-hero"

const monserrat700 = readFileSync(
    `${__dirname}/../fonts/montserrat-v15-latin-700.woff2`
  ).toString("base64")
  const monserratRegular = readFileSync(
    `${__dirname}/../fonts/montserrat-v15-latin-regular.woff2`
  ).toString("base64")
  
export const css = ({ backgroundColor, pattern, opacity, colorPattern , fontColor }): string => {
    return `
      @font-face{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${monserratRegular}) format('woff2');
      }
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${monserrat700}) format('woff2');
      }
      .animate-image {
        animation: image-transition 1.5s cubic-bezier(0.4, 0, 0.2, 1)
      }
      .animate-transition {
        animation: transition-animate 1.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      @keyframes transition-animate {
        0% {
          transform: translateX(-40px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes image-transition {
        0% {
          transform: scale(0.8);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      .font-monserrat700 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: ${fontColor};
        font-size: 2rem;
        margin-bottom: 0.5rem;
        line-height: 1.2;
        letter-spacing: -0.02em;
      }
      .font-monserratRegular {
        font-family: 'Montserrat', sans-serif;
        color: ${fontColor};
        line-height: 1.6;
      }
      .card-wrapper {
        background: ${backgroundColor};
        ${pattern == undefined ? '' : `background-image: ${getPattern(`${pattern}`, `${opacity}`, `${colorPattern}`)};`}
        width: 640px !important;
        height: 320px !important;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 3rem;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;
      }
      .card-wrapper::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      h1 {
        margin: 0;
        padding: 0;
      }
      p{
        font-size: 0.9rem;
        margin: 0.5rem 0;
        opacity: 0.95;
      }
      p.site {
        margin-top: 1rem;
        font-size: 0.85rem;
        font-weight: 500;
        opacity: 0.8;
      }
      .card-img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .card-wrapper-desc {
        display: flex; 
        flex-direction: column;
        width: 60%;
        gap: 0.25rem;
      }
      .card-wrapper-img {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .card-icon {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        font-size: 0.75rem;
        margin-top: 1.5rem;
      }
      .card-icon > div {
        padding: 0.4rem 0.8rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        backdrop-filter: blur(10px);
        transition: all 0.2s ease;
      }
      div.line{
        width: 100%;
        height: 2px;
        margin: 1rem 0;
        background: linear-gradient(90deg, ${fontColor}30 0%, ${fontColor}10 100%);
        border: none;
      }
    `
}