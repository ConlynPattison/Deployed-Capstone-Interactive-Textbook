import { InlineMath } from "react-katex";
import styles from "./DotProductWidget.module.css";

interface WidgetProps {
	dotResult: number
};

/**
 * Dot product widget - informational only
 * @todo convert this widget to show the components of a dot product calculation (vars => values => result)
 * @todo add value conversion for mag(vecA) and angle within cos(angle)
 */
export default function DotProductWidget({ dotResult }: WidgetProps) {
	const theta = Math.round(Math.acos(dotResult) * (180 / Math.PI));
	return (
		<div className={styles.controls_list}>
			<span className={styles.control}>
				<div>
					<InlineMath math={`{{\\color{57FFEB}\\vec d}}\\cdot{\\color{red}{{\\hat n}}} 
					= {\\left|{d}\\right|}{\\left|{n}\\right|}{cos(\\theta)}`} />
				</div>
			</span>
			<span className={styles.control}>
				<div>
					<InlineMath math={`{\\left|{d}\\right|}{cos(${theta})} = ${Math.round(dotResult)}`} />
				</div>
			</span>
		</div>
	);
}