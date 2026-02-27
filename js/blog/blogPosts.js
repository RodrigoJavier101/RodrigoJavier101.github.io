import { formattDate } from "./blogFunctions.js";
import { langs } from "../utils/constants.js";

export const blogPosts = {
  en: [
    /* 1 */
    {
      id: "1",
      title: "The welcome and the intended theme of the YouTube channel.",
      date: formattDate("2025-09-11", langs.en).complete,
      youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      content: `
        <p><strong>Docendo Discitur</strong>, from the Latin "by teaching, one learns." </p>
        <p>I make this effort to create explanatory videos with the goal of personally improving my knowledge through the technique of trying to teach. </p>
        <p>I took the expression from Seneca's Moral Letters to Lucilius, Letter 7, section 8, which I will quote explicitly: “…you should not imitate what is bad simply because it is abundant, nor hate the majority because they are different from you. Withdraw into yourself as much as you can. Surround yourself with those who help you become a better person. Welcome those you can improve. <strong>The process is mutual; for one learns by teaching,” (in Latin, Processus est mutuus; discimus docendo)</strong>. </p>
        <p>The scientist Richard Feynman had the principle of teaching beginners on advanced topics by giving lectures and classes to those new to the subject. So, humbly, I will imagine myself playing the role of teacher to myself. </p>
        <p>The topics I will try to cover are primarily related to computer science, and, going a bit further, I'd like to venture beyond computer science and delve into general scientific subjects such as mathematics and similar fields. I'd like to be as specific and focused as possible regarding the topics I address, without aiming to cover everything. </p>
        <p>So, from now on, I hope to share my perspective and learn, but by engaging in internal debate and working through my own thinking. </p>
        <p>Salut!</p>
      `,
    },
    /* 2 */
  ],
  es: [
    /* 1 */
    {
      id: "1",
      title: "Bienvenida y la pretendida temática del canal de YouTube.",
      youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      date: formattDate("2025-09-11", langs.es).complete,
      content: `
        <p><strong>Docendo Discitur</strong>, del latín "enseñando, se aprende". </p>
        <p>Este esfuerzo de hacer videos explicativos lo hago con la meta de mejorar personalmente en el conocimiento mediante la técnica de intentar enseñar.  </p>
        <p>La expresión la tomé de la frase de Séneca de sus Cartas Morales a Lucilius, Carta 7, sección 8, la que voy a citar expresamente: “…no debes imitar lo malo solo porque sea abundante, ni odiar a la mayoría porque sea diferente a ti. Retírate a tu interior, tanto como puedas. Rodéate de quienes te ayuden a ser mejor persona. Acoge a quienes puedas mejorar. <strong>El proceso es mutuo; pues se aprende enseñando” (en latín Processus est mutuus; discimus docendo)</strong>.</p>
        <p>El científico Richard Feynman tuvo el principio de enseñar a los principiantes sobre temas avanzados haciendo conferencias y dando clases a los primerizos. Así que, humildemente, imaginaré que hago el papel de profesor para mí mismo.</p>
        <p>Las temáticas que intentaré abordar son especialmente las relacionadas con informática y, yendo un poco más allá, me gustaría desviarme un de la informática y avanzar un poco en temas científicos en general tal como matemáticas y otros semejantes. Me gustaría ser lo más específico y lo más acotado posible en relación a los temas que estaría abordando sin el objetivo final de abarcar todo de todo.</p>
        <p>Así que espero, de ahora en adelante, imprimir mi óptica de las cosas y aprender, pero debatiendo conmigo mismo intentando operar en mi propia mente.</p>
        <p>Salut!</p>
      `,
    },
    /* 2 */
  ],
};
