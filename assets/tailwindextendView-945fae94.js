import{_ as t,o as e,c as o,a}from"./index-6effc621.js";const l={},s=a(`<p class="font-bold text-4xl pb-5 font-sans">Example on extending Tailwind and Flowbite:</p><p class="pb-5">This page gives informlation to implement <a href="https://fontawesome.com" target="_blank"><b>Fontawesome icons</b></a>, <a href="https://flowbite.com/docs/customize/dark-mode/" target="_blank"><b>the dark switch mode in Tailwind/Flowbite.</b></a> and <a href="https://www.tailwindcss-animated.com" target="_blank">animation in Tailwind</a>, </p><p class="font-bold font-sans text-2xl pb-5">Fontawesome</p><p class="pb-5">There are several ways to implement Fontawesome. <a href="https://tailwind-elements.com/learn/te-foundations/tailwind-css/icons/" target="_blank"><b>Fontawesome icons</b></a>, tells your more about SVG formats. </p><p class="pt-5">A first step is to <b>load the necesary files into the head section of index.html</b> (like you have done in a previous example of Flowbite). The following code needs to be added to the head section of index.html to load the necessary files into your project:</p><div class="pb-5 highlight highlight-source-shell notranslate position-relative overflow-auto"><pre style="overflow-x:scroll;max-width:80vw;height:auto;border:0.5px solid lightgray;padding:5px;white-space:pre-wrap;"><code class="language-html font-bold bg-white" data-lang="html">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css&quot; integrity=&quot;sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot; /&gt;            </code>
            </pre></div><p class="pt-5">There is also a github repository for that. <a href=" https://github.com/mattpfeffer/tailwind-fontawesome" target="_blank"><b>Fontawesome icons and NPM</b></a></p><div class="pb-5 highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre style="overflow-x:scroll;max-width:80vw;height:auto;border:0.5px solid lightgray;padding:5px;white-space:pre-wrap;" class="font-bold">npm install tailwind-fontawesome</pre></div><p class="pb-5">Next step is getting the code for your icons. We will need the SVG version of the icons. You will find an example in the section on the button of the dark switcher.</p><p class="font-bold font-sans text-2xl pb-5">Dark mode switch</p><p class="pb-5"><a href="https://flowbite.com/docs/components/footer/" target="_blank"><b>Let&#39;s start off by adding a footer component</b></a> that will contain the button to change between dark and light mode. Dark mode is a first-class feature of many operating systems, it’s becoming more and more common to design a dark version of your website to go along with the default design. To make this as easy as possible, Tailwind includes a dark variant that lets you style your site differently when dark mode is enabled. </p><p><b>Add the following line to your tailwind.config.js file</b> inside the section of module.exports</p><p class="pb-5"><pre style="overflow-x:scroll;max-width:80vw;height:auto;border:0.5px solid lightgray;padding:5px;white-space:pre-wrap;" class="chroma language-html" tabindex="0">            <code class="language-html" data-lang="html">... module.exports = {</code>
            <code class="language-html font-bold" data-lang="html">    darkMode: &#39;class&#39;,</code>
            <code class="language-html" data-lang="html">...</code>
        </pre></p><p class="pb-5"><p><b>Create a <code>&lt;button&gt;</code> element </b>inside the footer that can be interacted with to manually change the theme color.</p><p class="pb-5"><pre style="overflow-x:scroll;max-width:80vw;height:auto;border:0.5px solid lightgray;padding:5px;white-space:pre-wrap;" class="chroma language-html font-bold" tabindex="0"><code class="language-html font-bold" data-lang="html">&lt;button id=&quot;theme-toggle&quot; type=&quot;button&quot; class=&quot;text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5&quot;&gt;
            &lt;svg id=&quot;theme-toggle-dark-icon&quot; class=&quot;hidden w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;path d=&quot;M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
            &lt;svg id=&quot;theme-toggle-light-icon&quot; class=&quot;hidden w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;path d=&quot;M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z&quot; fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
        &lt;/button&gt;
        </code>
        </pre></p><p class="pt-5 pb-5"> Next is implementing the javascript file (in a to be created folder src/assets/js) as explained in: <b><a href="https://flowbite.com/docs/customize/dark-mode/" target="_blank"><b>the dark switch mode in Tailwind/Flowbite</b></a>. </b></p><p> Create a file called <b>darkswitch.js</b> in the folder src/assets/js and add in the following code: <div class="pt-5 pb-5 highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre style="overflow-x:scroll;max-width:80vw;height:20vh;border:0.5px solid lightgray;padding:5px;white-space:pre-wrap;" class="font-bold">var themeToggleDarkIcon = document.getElementById(&#39;theme-toggle-dark-icon&#39;);
                        var themeToggleLightIcon = document.getElementById(&#39;theme-toggle-light-icon&#39;);

                        // Change the icons inside the button based on previous settings
                        if (localStorage.getItem(&#39;color-theme&#39;) === &#39;dark&#39; || (!(&#39;color-theme&#39; in localStorage) &amp;&amp; window.matchMedia(&#39;(prefers-color-scheme: dark)&#39;).matches)) {
                            themeToggleLightIcon.classList.remove(&#39;hidden&#39;);
                        } else {
                            themeToggleDarkIcon.classList.remove(&#39;hidden&#39;);
                        }

                        var themeToggleBtn = document.getElementById(&#39;theme-toggle&#39;);

                        themeToggleBtn.addEventListener(&#39;click&#39;, function() {

                            // toggle icons inside button
                            themeToggleDarkIcon.classList.toggle(&#39;hidden&#39;);
                            themeToggleLightIcon.classList.toggle(&#39;hidden&#39;);

                            // if set via local storage previously
                            if (localStorage.getItem(&#39;color-theme&#39;)) {
                                if (localStorage.getItem(&#39;color-theme&#39;) === &#39;light&#39;) {
                                    document.documentElement.classList.add(&#39;dark&#39;);
                                    localStorage.setItem(&#39;color-theme&#39;, &#39;dark&#39;);
                                } else {
                                    document.documentElement.classList.remove(&#39;dark&#39;);
                                    localStorage.setItem(&#39;color-theme&#39;, &#39;light&#39;);
                                }

                            // if NOT set via local storage previously
                            } else {
                                if (document.documentElement.classList.contains(&#39;dark&#39;)) {
                                    document.documentElement.classList.remove(&#39;dark&#39;);
                                    localStorage.setItem(&#39;color-theme&#39;, &#39;light&#39;);
                                } else {
                                    document.documentElement.classList.add(&#39;dark&#39;);
                                    localStorage.setItem(&#39;color-theme&#39;, &#39;dark&#39;);
                                }
                            }
                            
                        });
            </pre></div></p><p> Add the following line beneath in your index.html befor ethe end of your body tag: <div class="pt-5 pb-5 highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre style="overflow-x:scroll;max-width:80vw;height:auto;border:0.5px solid lightgray;padding:5px;white-space:pre-wrap;" class="font-bold">&lt;script type=&quot;module&quot; src=&quot;src/assets/js/darkswitch.js&quot;&gt;&lt;/script&gt;</pre></div></p><p> After following the explanation above: don&#39;t forget to add the following class to your body element at index.html to see the effect of the dark switcher: <div class="pt-5 pb-5 highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre style="overflow-x:scroll;max-width:80vw;height:auto;border:0.5px solid lightgray;padding:5px;white-space:pre-wrap;" class="font-bold"> class=&quot;bg-white dark:bg-gray-900&quot;&gt;</pre></div></p></p>`,14),n=[s];function i(r,d,h,c,g,p){return e(),o("div",null,n)}const u=t(l,[["render",i]]);export{u as default};
