export default (content: string[], matcher: string) => {
  const tempContent = content.join(" ");  
  return {
    firstLetterMAtch: tempContent.match(new RegExp(`\\b${matcher}`,'g' ))?.length || 0,
    allLettermatch: tempContent.match(new RegExp(`${matcher}`,'g' ))?.length || 0,
    lastLetterMatch:tempContent.match(new RegExp(`${matcher}\\b`,'g' ))?.length || 0,
    doubleLetterMatch:tempContent.match(new RegExp(`${matcher+matcher}`,'g' ))?.length || 0,
  };
};
