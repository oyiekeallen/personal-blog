import { createGlobalStyle } from '@nfront/global-styles';
import animate from './animate.js'
import styles from './styles.js'
import mediaqueries from './mediaqueries.js'

const GlobalStyleComponent = createGlobalStyle`
	${animate}
	${styles}	
	${mediaqueries}
`;

export default GlobalStyleComponent;
