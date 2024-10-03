const TextEditorReplace = ({ text }) => {
  const replaceText = (text) => {
    if (!text) return '';
    return text
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&amp;rsquo;/g, "'")
      .replace(/&amp;nbsp;/g, ' ')
      .replace(/&amp;/g, '&');
  };

  return <span dangerouslySetInnerHTML={{ __html: replaceText(text) }} />;
};

export default TextEditorReplace;
