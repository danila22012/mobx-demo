export default (content: string, matcher: string) => {
  console.log(content);
  
  return {
    firstLetterMAtch: content.match(new RegExp(`\\b${matcher}`,'g' ))?.length || 0,
    allLettermatch: content.match(new RegExp(`${matcher}`,'g' ))?.length || 0,
    lastLetterMatch:content.match(new RegExp(`${matcher}\\b`,'g' ))?.length || 0,
    doubleLetterMatch:content.match(new RegExp(`${matcher+matcher}`,'g' ))?.length || 0,
  };
};
