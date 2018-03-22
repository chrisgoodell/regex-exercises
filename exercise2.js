
//Parse out all Star Trek The Next Generation episodes from HTML

const assert = require('assert');

const regex = /([a-zA-Z0-9 ,.'éà]+(?=<\/a>(?:<\/span>)?"<\/td>))/;

assert(regex.exec('<td class="summary" style="text-align:left">"<a href="/wiki/Hide_and_Q" title="Hide and Q">Hide and Q</a>"</td>'));

//successfully parses all STNG episode titles from Wikipedia page provided below:
//https://en.wikipedia.org/wiki/List_of_Star_Trek%3A_The_Next_Generation_episodes
