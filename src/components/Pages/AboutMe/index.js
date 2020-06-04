import React from 'react';
import { StylesProvider, Paper } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import './style.scss';

const rootClass = 'about-wrapper';

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a rutrum nulla.
Nunc vitae nibh id libero vestibulum tempus ac a arcu. Aenean sed ultricies felis. Pellentesque lorem felis, ultrices non hendrerit a, suscipit ac metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis euismod erat, a iaculis mi aliquet nec. Proin eu cursus ex. Phasellus convallis iaculis tincidunt.
Curabitur diam lorem, consectetur sed leo sit amet, vestibulum maximus ipsum.
Nulla molestie nulla et risus faucibus, eget tincidunt ante pretium. Nunc sit amet massa in dolor malesuada blandit. Ut aliquam, tortor a molestie lobortis, odio ipsum lacinia felis, sit amet commodo sem augue sed magna. Vivamus quis nisl rhoncus, tincidunt ex ut, elementum nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin tellus nibh, porttitor eget tellus eu, cursus mollis risus. Proin finibus lobortis purus, a aliquam est sagittis eu.
\n
Aliquam consequat accumsan sagittis. Cras venenatis nisl felis, vitae iaculis est faucibus et. Vivamus ut libero a purus dictum placerat. Nunc iaculis, ante id convallis posuere, massa elit aliquam ante, nec luctus nibh mauris at quam. Donec at orci vulputate, molestie lacus sed, eleifend ex. In faucibus nisi quis porta tincidunt. Quisque finibus dui libero, et malesuada lacus consequat vel. Mauris dictum ultrices pellentesque. Maecenas pulvinar neque sed felis maximus tincidunt. Aenean dapibus, ante non dictum pellentesque, nibh turpis ultrices augue, eu maximus turpis leo eget eros. Maecenas posuere urna ac velit rhoncus lobortis. Pellentesque cursus magna in purus dapibus, et tincidunt enim viverra. Pellentesque et fermentum arcu. Sed dignissim feugiat nisi, vel dapibus felis faucibus eu. Suspendisse at turpis ut purus rutrum molestie vitae eu tortor.

<pre><code class="language-javascript">
function Splash() {
  console.log("hellow world!");
}
</code></pre>
Mauris ultrices est et ornare suscipit. Sed semper nisi leo, ac eleifend erat venenatis lobortis. Nulla sit amet nunc sit amet quam fringilla tincidunt et vitae ipsum. Praesent neque ligula, imperdiet quis velit vitae, lacinia consequat odio. Aliquam tempus suscipit tempus. Ut eu eros nec augue pharetra hendrerit. Sed eleifend elementum purus sed malesuada.
`;

function AboutMe() {
  return (

    <div id="about" className={`${rootClass} col-11 m-auto p-0`} data-aos="fade-in">
      <StylesProvider injectFirst>
      <Paper className={`${rootClass}__text`} elevation={0}>
        <h2 className="text-center">About Me</h2>
        <div>{ ReactHtmlParser(text) }</div>
      </Paper></StylesProvider>
    </div>
  )
}

export default AboutMe;