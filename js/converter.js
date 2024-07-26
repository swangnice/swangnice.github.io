async function loadMarkdown(url) {
    try {
        // 获取 Markdown 文件内容
        const response = await fetch(url);
        const markdown = await response.text();
        // 将 Markdown 转换为 HTML
        const html = convertMarkdownToHTML(markdown);
        // 将转换后的 HTML 插入到页面中
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('加载 Markdown 文件时出错:', error);
        document.getElementById('content').innerHTML = '加载内容时出错。';
    }
}

// 自定义的 Markdown 转 HTML 转换函数
function convertMarkdownToHTML(markdown) {
    let html = markdown;
    const htmlTags = [];

    html = html.replace((/<[^>]*>/gim) , (match) => {
    
        htmlTags.push(match);
        return `<!--HTMLTAG${htmlTags.length - 1}-->`;
    });

    // 转换标题
    html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // 转换粗体和斜体
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    html = html.replace(/_(.*?)_/gim, '<em>$1</em>');

    // Conver image
    html = html.replace(/\!\[(.*?)\]\((.*?)\)/gim, "<img src='$2' width=70%>");
    // 转换链接
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");

    // 转换无序列表
    html = html.replace(/^\s*[-+*]\s+(.*)/gim, '<ul>\n<li>$1</li>\n</ul>');
    html = html.replace(/<\/ul>\s*<ul>/gim, '');

    // 转换有序列表
    html = html.replace(/^\s*\d+\.\s+(.*)/gim, '<ol>\n<li>$1</li>\n</ol>');
    html = html.replace(/<\/ol>\s*<ol>/gim, '');

    // Convert Code Blocks (fenced blocks)
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
    // Convert Code (inline)
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // Convert Tables
    // html = html.replace(/^\|(.+)\|$/gim, '<table><tr><td>$1</td></tr></table>');
    // html = html.replace(/<\/td><\/tr><table>/gim, '');
    // html = html.replace(/<\/td><td>/gim, '</td></tr><tr><td>');



    // Convert Paragraph
    html = html.replace(/^\s*(?!<h|<ul|<ol|<li|<b|<i|<a)(.*)\s*$/gim, '<p>$1</p>');


    html = html.replace(/<!--HTMLTAG(\d+)-->/gim, (match, index) => {
        return htmlTags[index];
    });

    return html.trim();
}