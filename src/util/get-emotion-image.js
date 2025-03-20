import e1 from "./../assets/emotion1.png";
import e2 from "./../assets/emotion2.png";
import e3 from "./../assets/emotion3.png";
import e4 from "./../assets/emotion4.png";
import e5 from "./../assets/emotion5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return e1;
    case 2:
      return e2;
    case 3:
      return e3;
    case 4:
      return e4;
    case 5:
      return e5;
    default:
      return null;
  }
}
