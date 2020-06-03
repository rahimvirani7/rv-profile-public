import React from 'react';
import { StylesProvider, Paper } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import './style.scss';

const rootClass = 'about-wrapper';

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a rutrum nulla. Nunc vitae nibh id libero vestibulum tempus ac a arcu. Aenean sed ultricies felis. Pellentesque lorem felis, ultrices non hendrerit a, suscipit ac metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis euismod erat, a iaculis mi aliquet nec. Proin eu cursus ex. Phasellus convallis iaculis tincidunt. Curabitur diam lorem, consectetur sed leo sit amet, vestibulum maximus ipsum.

Nulla molestie nulla et risus faucibus, eget tincidunt ante pretium. Nunc sit amet massa in dolor malesuada blandit. Ut aliquam, tortor a molestie lobortis, odio ipsum lacinia felis, sit amet commodo sem augue sed magna. Vivamus quis nisl rhoncus, tincidunt ex ut, elementum nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin tellus nibh, porttitor eget tellus eu, cursus mollis risus. Proin finibus lobortis purus, a aliquam est sagittis eu.

Aliquam consequat accumsan sagittis. Cras venenatis nisl felis, vitae iaculis est faucibus et. Vivamus ut libero a purus dictum placerat. Nunc iaculis, ante id convallis posuere, massa elit aliquam ante, nec luctus nibh mauris at quam. Donec at orci vulputate, molestie lacus sed, eleifend ex. In faucibus nisi quis porta tincidunt. Quisque finibus dui libero, et malesuada lacus consequat vel. Mauris dictum ultrices pellentesque. Maecenas pulvinar neque sed felis maximus tincidunt. Aenean dapibus, ante non dictum pellentesque, nibh turpis ultrices augue, eu maximus turpis leo eget eros. Maecenas posuere urna ac velit rhoncus lobortis. Pellentesque cursus magna in purus dapibus, et tincidunt enim viverra. Pellentesque et fermentum arcu. Sed dignissim feugiat nisi, vel dapibus felis faucibus eu. Suspendisse at turpis ut purus rutrum molestie vitae eu tortor.

Proin consequat elementum tincidunt. Duis a lacinia elit. Suspendisse potenti. Quisque eget bibendum erat. Sed dapibus, est quis venenatis ultrices, dui dolor volutpat nulla, eu mollis urna elit non mauris. Nulla facilisi. Fusce suscipit auctor dignissim. Suspendisse ultricies ornare nisi quis sagittis. Suspendisse aliquam, neque id tempor cursus, enim dui luctus dui, eget venenatis eros nunc id metus. Nulla facilisi. Ut lectus sapien, gravida a turpis eu, luctus blandit purus. Ut bibendum odio mauris. Ut ac erat lorem. Ut imperdiet lectus vitae orci euismod viverra. Integer ac purus pellentesque, vestibulum mauris id, placerat odio.

Morbi vestibulum rhoncus diam, a lacinia orci tincidunt quis. Mauris eros mauris, cursus et eros quis, sodales porttitor orci. Aliquam fringilla est quis mauris suscipit dictum. Nullam ultricies ligula non nisl auctor, vitae auctor leo condimentum. Sed nec ullamcorper arcu, sed ultrices nunc. Nam ac venenatis nulla, eu aliquam ex. Proin laoreet malesuada ex, in semper purus efficitur ut. Proin tempor elit neque, ac consequat nunc molestie sed. Morbi consequat quam ante, ut finibus metus laoreet in. Nullam efficitur ullamcorper nibh sit amet posuere. Praesent libero sapien, tempor at magna vitae, aliquam pellentesque leo. Donec maximus augue lectus, ullamcorper sodales purus aliquet vitae. Fusce venenatis ultrices ex, at volutpat purus hendrerit a. Nulla eget nisl congue, consequat neque ac, malesuada ligula. Curabitur elementum enim eget felis cursus, ut lobortis nibh sagittis.

Sed feugiat vestibulum nunc, ut consectetur odio dictum sit amet. Praesent augue risus, tempor non cursus et, blandit non libero. In a nulla quis nulla tempus viverra eu sed velit. Aenean sodales est quis arcu finibus, sit amet facilisis felis dictum. Phasellus dapibus pulvinar risus sed facilisis. Maecenas dapibus luctus efficitur. Vestibulum scelerisque magna sem, a rutrum urna auctor vitae. Sed sem est, aliquam et pulvinar ut, iaculis sit amet felis. Vivamus imperdiet blandit diam vel consequat. Donec auctor pharetra ligula, et semper nisi auctor vel.

<pre><code class="language-javascript">
function Splash() {
  console.log("hellow world!");
}
</code></pre>
Mauris ultrices est et ornare suscipit. Sed semper nisi leo, ac eleifend erat venenatis lobortis. Nulla sit amet nunc sit amet quam fringilla tincidunt et vitae ipsum. Praesent neque ligula, imperdiet quis velit vitae, lacinia consequat odio. Aliquam tempus suscipit tempus. Ut eu eros nec augue pharetra hendrerit. Sed eleifend elementum purus sed malesuada.

Aliquam pretium, quam in efficitur accumsan, massa velit malesuada risus, vitae euismod felis sem id diam. Mauris eu ligula tempor, gravida urna eu, rutrum metus. In at tincidunt risus. Aenean porta rhoncus augue. Aliquam nunc arcu, tincidunt ut nisl in, laoreet venenatis felis. Pellentesque eget lacus diam. Vestibulum ut laoreet nisl, nec elementum odio. Ut viverra nunc vitae neque sagittis fringilla. Donec luctus, felis in eleifend fringilla, dolor orci consectetur nisi, et elementum nisl tellus a magna. Curabitur vestibulum gravida quam eu euismod. Cras venenatis egestas ante ut lacinia.
`;

function AboutMe() {
  return (

    <div id="about" className={`${rootClass} col-11 m-auto p-0`} data-aos="fade-in">
      <StylesProvider injectFirst>
      <Paper className={`${rootClass}__text`} elevation={0}>
        <h2 className="text-center">About Me</h2>
        <p>{ ReactHtmlParser(text) }</p>
      </Paper></StylesProvider>
    </div>
  )
}

export default AboutMe;