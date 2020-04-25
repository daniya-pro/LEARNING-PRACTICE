function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukee";
      break;
    default:
      cityName = "";
  }
  document.getElementById("city").value = cityName;
}



function expandLoris() {              
  
 var expandedParagraph ="Websites are typically dedicated to a particular topic or purpose, such as news, education, commerce, entertainment, or social networking. Hyperlinking between web pages guides the navigation of the site, which often starts with a home page. The software application used on these devices is called a web browser. A website is a collection of publicly accessible, interlinked Web pages that share a single domain name. Websites can be created and maintained by an individual, group, business or organization to serve a variety of purposes. Together, all publicly accessible websites constitute the World Wide Web. web·site. Use website in a sentence. noun. The definition of a website is a page or collection of pages on the World Wide Web that contains specific information which was all provided by one person or entity and traces back to a common Uniform Resource Locator (URL). A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Notable examples are wikipedia.org, google.com, and amazon.com. All publicly accessible websites collectively constitute the World Wide Web. A website is your most powerful tool for communication. A website is a unique way to connect with the world. Whether you choose to create a website to share your passion for music, inform people of your business, sell products, or any other reason there are no boundaries to what you can do! The Role of a Website in a Business. The website is a magazine and a storefront at the same time. It allows your visitors to see you in the virtual space so that they can make particular assumptions and create a given perception of your brand. A website is a nifty tool that every business needs. Here we discuss thirteen are types of websites, portal, news, informational, business/marketing, blog, wiki, online social network, educational, entertainment, advocacy, Web application, content aggregator and personal. Many websites fall into more than one of these categoriesHomepages. — The homepage is your site's main hub and serves as the face of a brand.  Magazine websites. E-commerce websites.  Blogs. Portfolio websites. Landing pages. Social media websites. Directory and contact pages. Portfolio Website. Media Website. Brochure Website. Nonprofit Website. Educational Website. Infopreneur Website. Web Portal. Wiki or Community Forum Website. Wikipedia. Reddit.Google.co.in. Yahoo.com. Wikipedia. Baidu.com. Facebook. YouTube. Google.Objectives: Providing quality content on your website, regularly adding new information, establishing trust, marketing your site on other websites and social media. Goal: Improve interaction with existing and potential customers Having a website and online presence strategy allows you to market your business online. ... A website is also important because it helps you establish credibility as a business. Most people just assume that you have a website since the vast majority of businesses do, at least the vast majority of big companies do .There are basically two main types of website - static and dynamic. A static site is one that is usually written in plain HTML and what is in the code of the page is what is displayed to the user. A dynamic site is one that is written using a server-side scripting language such as PHP, ASP, JSP, or Coldfusion. Unsurprisingly, this list is dominated by big websites that many of us know and love. YouTube is the most visited website on our list, with more than 1.7 billion estimated monthly visits from organic search.These types of websites include blogs, corporate, ecommerce, portfolio or photo-sharing, crowdfunding, news/magazine, social media, TV or video streaming, educational, portal, and a wiki or community forum. Here is our breakdown of the 12 most popular types of websites Web portal refers to a website or service that offers broad array of resources and services such as email, forums, search engines and online shopping malls. It's an organized gateway that helps to configure the access to information found on the internet. ... Some of the web portals are AOL, i Google, Yahoo and even mor Hypertext is text which contains links to other texts. The term was coined by Ted Nelson around 1965 (see History ). HyperMedia is a term used for hypertext which is not constrained to be text: it can include graphics, video and sound , for example. Apparently Ted Nelson was the first to use this term too. A browser is software that is used to access the internet. A browser lets you visit websites and do activities within them like login, view multimedia, link from one site to another, visit one page from another, print, send and receive email, among many other activities.A well-maintained website can help you gain a competitive advantage in your industry and improve your business image. Developing your web site offers many benefits including helping you get more leads and prospects, increase sales, enhance your professional brand, and improve your customer service.Overview. Websites can be used in various fashions: a personal website, a corporate website for a company, a government website, an organization website, etc. Websites can be the work of an individual, a business or other organization, and are typically dedicated to a particular topic or purpose.A website is a great way to provide value added service to your customers and clients, and is a great way to keep them coming back to your when they need your products or services. No matter what products you sell, you can share tips to your customers on how to use or care for the products they've purchased from you.A website (also written as web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. ... Hyperlinking between web pages guides the navigation of the site, which often starts with a home page.A static website contains Web pages with fixed content. ... Static sites are the most basic type of website and are the easiest to create. Unlike dynamic websites, they do not require any Web programming or database design. A static site can be built by simply creating a few HTML pages and publishing them to a Web serverThe Dark Web, however, can only be accessed by using the Tor browser. There is no way to accidentally stumble into it during typical browsing, such as social media accounts, shopping, or simply watching YouTube videos.";
 var shortParagraph =
 "Websites are typically dedicated to a particular topic or purpose, such as news, education, commerce , entertainment...";  var getel;
  getel = document.getElementById("p");
  if (getel.innerText === "Click For More.") {
   document.getElementById("f").innerText = expandedParagraph;
    getel.innerText = "Click For Less.";
  } else if (getel.innerText === "Click For Less.") {
    document.getElementById("f").innerText = shortParagraph;

    getel.innerText = "Click For More.";

    
  }

}