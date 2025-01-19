import Script from "next/script";
import React from "react";


function TypeWriter({ line }) {
  const colors = [];

  const defaultColor = ["#005f91"];
  if (line?.length != colors?.length) {
    for (let index = colors.length; index < line.length; index++) {
      const choose =
        defaultColor[Math.floor(Math.random() * defaultColor?.length)];
      colors?.push(choose);
    }
  }

  const js = `
const words = ${JSON.stringify(line)},
    colors = ${JSON.stringify(colors)},
    svg = document?.getElementById('text');

let line = ''

function generator() {
    let index = 0;
    return () => {
        if (index >= words.length) {
            index = 0;
        }
        return index++
    }
}

let gen = generator();
// GENERATE SVG
const svgGenerate = (line, fill = 'gold', font) => {
    var svgNS = "http://www.w3.org/2000/svg";
    var newText = document.createElementNS(svgNS, "text");
    newText?.setAttributeNS(null, "x", 0);
    newText?.setAttributeNS(null, "y", 28);

    newText?.setAttributeNS(null, "fill", fill);
    newText?.setAttributeNS(null, "font-family", "Product Sans");
    newText?.setAttributeNS(null, "class", "text-2xl font-bold  mx-auto max-w-2xl whitespace-pre-wrap");

    var textNode = document.createTextNode(line);
    newText?.appendChild(textNode);
    document?.getElementById("text")?.append(newText);
}

let index = 0
// Typing effect
function typeChar(word) {
    let i = 0;

    let id = setInterval(() => {
        if (i >= word.length) {
            deleteChar();
            clearInterval(id);
        }
        else {
            line += word[i];
            svg.textContent = ''
            index = words.indexOf(word)
            svgGenerate(line, colors[words.indexOf(word)])
            i++;
        }
    }, 75);

}

// Deleting effect
function deleteChar() {
    let word = line;
    let i = word.length - 1;
    let id = setInterval(() => {
        if (i >= 0) {
            line = line.substring(0, line.length - 1);
            i--;
            svg.textContent = ''
            svgGenerate(line, colors[index])
        }
        else {
            typeChar(words[gen()]);
            clearInterval(id);
        }
    }, 30);
}

// Initializing generator

typeChar(words[gen()]);
    `;
  return (
    <>
      <svg
        version="1.1"
        className="max-h-14 w-full xl:max-h-16"
        id="typewriter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="text"></g>
      </svg>
      <Script id="for_svg">{js}</Script>
    </>
  );
}

export default TypeWriter;
