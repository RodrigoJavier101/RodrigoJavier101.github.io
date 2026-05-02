// blogPosts.js

import { formattDate } from "./blogFunctions.js";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "../translations/translations.js";

// 🔑 Translatable fields follow key-first pattern
export const blogPosts = {
  "1": {
    // Language-independent fields (same for all langs)
    id: "1",
    youtubeUrl: "", // "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    
    // Translatable fields: key-first format
    title: {
      en: "The welcome and the intended theme of the YouTube channel.",
      es: "Bienvenida y la pretendida temática del canal de YouTube.",
      il: "ברוכים הבאים והנושא המיועד של ערוץ היוטיוב.", // 👈 Placeholder - review with native speaker
    },
    
    content: {
      en: `
        <p><strong>Docendo Discitur</strong>, from the Latin "by teaching, one learns." </p>
        <p>I make this effort to create explanatory videos with the goal of personally improving my knowledge through the technique of trying to teach. </p>
        <p>I took the expression from Seneca's Moral Letters to Lucilius, Letter 7, section 8, which I will quote explicitly: "…you should not imitate what is bad simply because it is abundant, nor hate the majority because they are different from you. Withdraw into yourself as much as you can. Surround yourself with those who help you become a better person. Welcome those you can improve. <strong>The process is mutual; for one learns by teaching," (in Latin, Processus est mutuus; discimus docendo)</strong>. </p>
        <p>The scientist <strong>Richard Feynman</strong> had the principle of teaching beginners on advanced topics by giving lectures and classes to those new to the subject. So, humbly, I will imagine myself playing the role of teacher to myself. </p>
        <p>The topics I will try to cover are primarily related to computer science, and, going a bit further, I'd like to venture beyond computer science and delve into general scientific subjects such as mathematics and similar fields. I'd like to be as specific and focused as possible regarding the topics I address, without aiming to cover everything. </p>
        <p>So, from now on, I hope to share my perspective and learn, but by engaging in internal debate and working through my own thinking. </p>
        <p>Salut!</p>
      `,
      es: `
        <p><strong>Docendo Discitur</strong>, del latín "enseñando, se aprende". </p>
        <p>Este esfuerzo de hacer videos explicativos lo hago con la meta de mejorar personalmente en el conocimiento mediante la técnica de intentar enseñar.  </p>
        <p>La expresión la tomé de la frase de Séneca de sus Cartas Morales a Lucilius, Carta 7, sección 8, la que voy a citar expresamente: "…no debes imitar lo malo solo porque sea abundante, ni odiar a la mayoría porque sea diferente a ti. Retírate a tu interior, tanto como puedas. Rodéate de quienes te ayuden a ser mejor persona. Acoge a quienes puedas mejorar. <strong>El proceso es mutuo; pues se aprende enseñando" (en latín Processus est mutuus; discimus docendo)</strong>.</p>
        <p>El científico <strong>Richard Feynman</strong> tuvo el principio de enseñar a los principiantes sobre temas avanzados haciendo conferencias y dando clases a los primerizos. Así que, humildemente, imaginaré que hago el papel de profesor para mí mismo.</p>
        <p>Las temáticas que intentaré abordar son especialmente las relacionadas con informática y, yendo un poco más allá, me gustaría desviarme de la informática y avanzar un poco en temas científicos en general tal como matemáticas y otros semejantes. Me gustaría ser lo más específico y lo más acotado posible en relación a los temas que estaría abordando sin el objetivo final de abarcar todo de todo.</p>
        <p>Así que espero, de ahora en adelante, imprimir mi óptica de las cosas y aprender, pero debatiendo conmigo mismo intentando operar en mi propia mente.</p>
        <p>Salut!</p>
      `,
      il: `
        <p><strong>Docendo Discitur</strong>, מהלטינית "בלימוד, לומדים".</p>
        <p>אני משקיע מאמץ זה ביצירת סרטוני הסבר במטרה לשפר אישית את הידע שלי באמצעות הטכניקה של ניסיון ללמד.</p>
        <p>לקחתי את הביטוי ממכתביו המוסריים של סנקה ללוסיליוס, מכתב 7, סעיף 8, אותו אצטט במפורש: "…אל תחקה את הרע רק מפני שהוא בשפע, אל תשנא את הרוב מפני שהוא שונה ממך. סגור לתוך עצמך ככל שאתה יכול. הקף את עצמך באלה שעוזרים לך להיות אדם טוב יותר. קבל בברכה את אלה שאתה יכול לשפר. <strong>התהליך הוא הדדי; כי לומדים על ידי הוראה," (בלטינית, Processus est mutuus; discimus docendo)</strong>.</p>
        <p>המדען <strong>ריצ'רד פיינמן</strong> נקט בעקרון ללמד מתחילים בנושאים מתקדמים על ידי הרצאות וכיתות לאלה החדשים בנושא. אז, בענווה, אדמיין את עצמי משחק בתפקיד המורה לעצמי.</p>
        <p>הנושאים שאנסה לכסות קשורים בעיקר למדעי המחשב, ובמעט מעבר לזה, הייתי רוצה לצאת ממדעי המחשב ולהעמיק בנושאים מדעיים כלליים כמו מתמטיקה ותחומים דומים. הייתי רוצה להיות כמה שיותר ספציפי וממוקד בנושאים שאני מתייחס אליהם, ללא כוונה לכסות הכל.</p>
        <p>אז, מעכשיו, אני מקווה לשתף את נקודת המבט שלי וללמוד, אך על ידי עיסוק בדיון פנימי ועבודה דרך החשיבה שלי.</p>
        <p>Salut!</p>
      `,
    },

    // 🗓️ Dynamic date: generate per language when needed
    getDate: (lang = DEFAULT_LANG) => formattDate("2026-05-03", lang).complete,
  },
  // Add more posts following the same pattern...
};

/**
 * Helper: Get a blog post with translations resolved for a specific language
 * @param {string} postId 
 * @param {string} lang 
 * @returns {Object|null}
 */
export function getBlogPost(postId, lang = DEFAULT_LANG) {
  const post = blogPosts[postId];
  if (!post) return null;

  // Fallback chain: requested lang → default lang → first available
  const resolve = (field) => {
    const translations = post[field];
    return translations?.[lang] ?? translations?.[DEFAULT_LANG] ?? Object.values(translations)?.[0] ?? "";
  };

  return {
    id: post.id,
    youtubeUrl: post.youtubeUrl,
    title: resolve("title"),
    content: resolve("content"),
    date: typeof post.getDate === "function" ? post.getDate(lang) : "",
  };
}

/**
 * Helper: Get all blog posts for a specific language
 * @param {string} lang 
 * @returns {Array<Object>}
 */
export function getAllBlogPosts(lang = DEFAULT_LANG) {
  return Object.keys(blogPosts)
    .map(id => getBlogPost(id, lang))
    .filter(post => post !== null);
}