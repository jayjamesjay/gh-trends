import React from 'react';
import PropTypes from 'prop-types';

import formatDate from '../utils/Date';
import { LinkA } from '../styles/Link';

/**
 * @module Data
 */

const weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate() - 7);
const queryWeek = `created:>${formatDate(weekAgo)}`;

const monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);
const queryMonth = `created:>${formatDate(monthAgo)}`;

const queryAllTime = 'stars:>10';

/**
 * Queries generated for different periods of time
 */
export const queries = {
  'This Week': queryWeek,
  'This Month': queryMonth,
  'All Time': queryAllTime,
};

/**
 * Compares if two items have identical nameWithOwner
 *
 * @param {object} itme - item to campare
 * @param {object} other - next item to campare
 * @returns {boolean}
 */
export const identicalItems = (item, other) => item.nameWithOwner === other.nameWithOwner;

/**
 * List of languages with corresponding colors
 */
export const languages = {
  '1C Enterprise': '#814CCC',
  ABAP: '#E8274B',
  'AGS Script': '#B9D9FF',
  AMPL: '#E6EFBB',
  ANTLR: '#9DC3FF',
  'API Blueprint': '#2ACCA8',
  APL: '#5A8164',
  ASP: '#6a40fd',
  ATS: '#1ac620',
  ActionScript: '#882B0F',
  Ada: '#02f88c',
  Agda: '#315665',
  Alloy: '#64C800',
  AngelScript: '#C7D7DC',
  AppleScript: '#101F1F',
  Arc: '#aa2afe',
  AspectJ: '#a957b0',
  Assembly: '#6E4C13',
  AutoHotkey: '#6594b9',
  AutoIt: '#1C3552',
  Ballerina: '#FF5000',
  Batchfile: '#C1F12E',
  BlitzMax: '#cd6400',
  Boo: '#d4bec1',
  Brainfuck: '#2F2530',
  C: '#555555',
  'C#': '#178600',
  CSS: '#563d7c',
  Ceylon: '#dfa535',
  Chapel: '#8dc63f',
  Cirru: '#ccccff',
  Clarion: '#db901e',
  Clean: '#3F85AF',
  Click: '#E4E6F3',
  Clojure: '#db5855',
  CoffeeScript: '#244776',
  ColdFusion: '#ed2cd6',
  'Common Lisp': '#3fb68b',
  'Common Workflow Language': '#B5314C',
  'Component Pascal': '#B0CE4E',
  Crystal: '#776791',
  'C++': '#f34b7d',
  Cuda: '#3A4E3A',
  D: '#ba595e',
  DM: '#447265',
  Dart: '#00B4AB',
  DataWeave: '#003a52',
  Dogescript: '#cca760',
  Dylan: '#6c616e',
  E: '#ccce35',
  ECL: '#8a1267',
  EQ: '#a78649',
  Eiffel: '#946d57',
  Elixir: '#6e4a7e',
  Elm: '#60B5CC',
  'Emacs Lisp': '#c065db',
  EmberScript: '#FFF4F3',
  Erlang: '#B83998',
  'F#': '#b845fc',
  FLUX: '#88ccff',
  Factor: '#636746',
  Fancy: '#7b9db4',
  Fantom: '#14253c',
  Forth: '#341708',
  Fortran: '#4d41b1',
  FreeMarker: '#0050b2',
  Frege: '#00cafe',
  'Game Maker Language': '#8fb200',
  Genie: '#fb855d',
  Gherkin: '#5B2063',
  Glyph: '#e4cc98',
  Gnuplot: '#f0a9f0',
  Go: '#375eab',
  Golo: '#88562A',
  Gosu: '#82937f',
  'Grammatical Framework': '#79aa7a',
  Groovy: '#e69f56',
  HTML: '#e34c26',
  Hack: '#878787',
  Harbour: '#0e60e3',
  Haskell: '#5e5086',
  Haxe: '#df7900',
  Hy: '#7790B2',
  IDL: '#a3522f',
  Idris: '#b30000',
  Io: '#a9188d',
  Ioke: '#078193',
  Isabelle: '#FEFE00',
  J: '#9EEDFF',
  JSONiq: '#40d47e',
  Java: '#b07219',
  JavaScript: '#f1e05a',
  Jolie: '#843179',
  Julia: '#a270ba',
  'Jupyter Notebook': '#DA5B0B',
  KRL: '#28431f',
  Kotlin: '#F18E33',
  LFE: '#4C3023',
  LLVM: '#185619',
  LOLCODE: '#cc9900',
  LSL: '#3d9970',
  Lasso: '#999999',
  Lex: '#DBCA00',
  LiveScript: '#499886',
  LookML: '#652B81',
  Lua: '#000080',
  MAXScript: '#00a6a6',
  MQL4: '#62A8D6',
  MQL5: '#4A76B8',
  MTML: '#b7e1f4',
  Makefile: '#427819',
  Mask: '#f97732',
  Matlab: '#e16737',
  Max: '#c4a79c',
  Mercury: '#ff2b2b',
  Meson: '#007800',
  Metal: '#8f14e9',
  Mirah: '#c7a938',
  NCL: '#28431f',
  Nearley: '#990000',
  Nemerle: '#3d3c6e',
  NetLinx: '#0aa0ff',
  'NetLinx+ERB': '#747faa',
  NetLogo: '#ff6375',
  NewLisp: '#87AED7',
  Nextflow: '#3ac486',
  Nim: '#37775b',
  Nit: '#009917',
  Nix: '#7e7eff',
  Nu: '#c9df40',
  OCaml: '#3be133',
  'Objective-C': '#438eff',
  'Objective-C++': '#6866fb',
  'Objective-J': '#ff0c5a',
  Omgrofl: '#cabbff',
  Opal: '#f7ede0',
  Oxygene: '#cdd0e3',
  Oz: '#fab738',
  P4: '#7055b5',
  PAWN: '#dbb284',
  PHP: '#4F5D95',
  PLSQL: '#dad8d8',
  Pan: '#cc0000',
  Papyrus: '#6600cc',
  Parrot: '#f3ca0a',
  Pascal: '#E3F171',
  Pep8: '#C76F5B',
  Perl: '#0298c3',
  'Perl 6': '#0000fb',
  PigLatin: '#fcd7de',
  Pike: '#005390',
  PogoScript: '#d80074',
  PostScript: '#da291c',
  PowerBuilder: '#8f0f8d',
  PowerShell: '#012456',
  Processing: '#0096D8',
  Prolog: '#74283c',
  'Propeller Spin': '#7fa2a7',
  Puppet: '#302B6D',
  PureBasic: '#5a6986',
  PureScript: '#1D222D',
  Python: '#3572A5',
  QML: '#44a51c',
  R: '#198CE7',
  RAML: '#77d9fb',
  RUNOFF: '#665a4e',
  Racket: '#22228f',
  Ragel: '#9d5200',
  Rascal: '#fffaa0',
  Rebol: '#358a5b',
  Red: '#f50000',
  "Ren'Py": '#ff7f7f',
  Ring: '#0e60e3',
  Roff: '#ecdebe',
  Rouge: '#cc0088',
  Ruby: '#701516',
  Rust: '#dea584',
  SAS: '#B34936',
  SQF: '#3F3F3F',
  'SRecode Template': '#348a34',
  SaltStack: '#646464',
  Scala: '#c22d40',
  Scheme: '#1e4aec',
  Self: '#0579aa',
  Shell: '#89e051',
  Shen: '#120F14',
  Slash: '#007eff',
  Smalltalk: '#596706',
  Solidity: '#AA6746',
  SourcePawn: '#5c7611',
  Squirrel: '#800000',
  Stan: '#b2011d',
  'Standard ML': '#dc566d',
  SuperCollider: '#46390b',
  Swift: '#ffac45',
  SystemVerilog: '#DAE1C2',
  'TI Program': '#A0AA87',
  Tcl: '#e4cc98',
  TeX: '#3D6117',
  Terra: '#00004c',
  Turing: '#cf142b',
  TypeScript: '#2b7489',
  UnrealScript: '#a54c4d',
  VCL: '#0298c3',
  VHDL: '#adb2cb',
  Vala: '#fbe5cd',
  Verilog: '#b2b7f8',
  'Vim script': '#199f4b',
  'Visual Basic': '#945db7',
  Volt: '#1F1F1F',
  Vue: '#2c3e50',
  WebAssembly: '#04133b',
  X10: '#4B6BEF',
  XC: '#99DA07',
  XQuery: '#5232e7',
  XSLT: '#EB8CEB',
  Yacc: '#4B6C4B',
  Zephir: '#118f9e',
  cpp: '#f34b7d',
  eC: '#913960',
  nesC: '#94B0C7',
  ooc: '#b0b77e',
  wdl: '#42f1f4',
  wisp: '#7582D1',
  xBase: '#403a40',
};

/**
 * Creates link to donwload a file
 *
 * @property {string} filename - name of this file
 * @property {string} content - raw content of this file
 * @property {string} dataType - type of data
 * @property {node} display - visual representation of link
 * @returns {DownloadLink}
 */
export function DownloadLink({ filename, content, dataType, display }) {
  const link = `data:${dataType}/plain;charset=utf-8,${encodeURIComponent(content)}`;
  return (
    <LinkA href={link} download={filename}>
      {display}
    </LinkA>
  );
}

DownloadLink.defaultProps = {
  dataType: 'plain',
};

DownloadLink.propTypes = {
  filename: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  dataType: PropTypes.string,
  display: PropTypes.node.isRequired,
};

/**
 * Converts JSON to Markdown
 *
 * @param {array} json - list of data objects
 * @returns {string}
 */
export function jsonToMarkdown(json) {
  return json
    .map((elem) => {
      let result = Object.entries(elem);
      const first = result.shift();
      result = `# ${first[1]} \r\n${result
        .map(([key, val]) => `${key}: ${val} \r\n\r\n`)
        .join('')}\r\n`;

      return result;
    })
    .join('');
}
