type Point = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br';
export type PointsType = [Point, Point];
export type PlacementType =
	| 'topLeft'
	| 'top'
	| 'topRight'
	| 'leftTop'
	| 'left'
	| 'leftBottom'
	| 'rightTop'
	| 'right'
	| 'rightBottom'
	| 'bottomLeft'
	| 'bottom'
	| 'bottomRight';

const placementMap: Record<PlacementType, PointsType> = {
	topLeft: ['bl', 'tl'],
	top: ['bc', 'tc'],
	topRight: ['br', 'tr'],
	leftTop: ['tr', 'tl'],
	left: ['cr', 'cl'],
	leftBottom: ['br', 'bl'],
	rightTop: ['tl', 'tr'],
	right: ['cl', 'cr'],
	rightBottom: ['bl', 'br'],
	bottomLeft: ['tl', 'bl'],
	bottom: ['tc', 'bc'],
	bottomRight: ['tr', 'br'],
};

interface PlacementConfig {
	target: HTMLElement;
	overlay: HTMLElement;
	placement?: PlacementType;
	points?: PointsType;
	beforePosition?: (
		style: React.CSSProperties,
		config: {
			target: { width: number; height: number };
			placement?: PlacementType;
		}
	) => React.CSSProperties;
}

export default function getPlacement({
	target,
	overlay,
	placement,
	points: opoints = ['tl', 'bl'] as PointsType,
	beforePosition,
}: PlacementConfig): React.CSSProperties {
	if (!target || !overlay) {
		return {};
	}

	const {
		width: twidth,
		height: theight,
		left: tleft,
		top: ttop,
	} = target.getBoundingClientRect();
	const { width: owidth, height: oheight } = overlay.getBoundingClientRect();
	const scrollParent = document.documentElement || document.body;
	const { scrollTop: cscrollTop, scrollLeft: cscrollLeft } = scrollParent;

	function getTopLeft(placement: PlacementType) {
		let points: PointsType = opoints;
		if (placement && placement in placementMap) {
			points = placementMap[placement] as PointsType;
		}

		let top = ttop + cscrollTop;
		let left = tleft + cscrollLeft;

		switch (points[1][0]) {
			case 't':
				top += 0;
				break;
			case 'c':
				top += theight / 2;
				break;
			case 'b':
				top += theight;
				break;
		}
		switch (points[1][1]) {
			case 'l':
				left += 0;
				break;
			case 'c':
				left += twidth / 2;
				break;
			case 'r':
				left += twidth;
				break;
		}
		switch (points[0][0]) {
			case 't':
				top += 0;
				break;
			case 'c':
				top -= oheight / 2;
				break;
			case 'b':
				top -= oheight;
				break;
		}
		switch (points[0][1]) {
			case 'l':
				left += 0;
				break;
			case 'c':
				left -= owidth / 2;
				break;
			case 'r':
				left -= owidth;
				break;
		}

		return { left, top };
	}

	let realPlacement = placement;
	let { left, top } = getTopLeft(placement!);
	// 确保 left 和 top 是数字
	left = Number(left);
	top = Number(top);

	let result: React.CSSProperties = {
		position: 'absolute',
		top,
		left,
	};

	// Boundary adjustment
	if (
		left < 0 ||
		top < 0 ||
		left + owidth > window.innerWidth ||
		top + oheight > window.innerHeight
	) {
		let newPlacement = placement;
		if (!newPlacement) return result;

		if (top < 0)
			newPlacement = newPlacement.replace('top', 'bottom') as PlacementType;
		if (left < 0)
			newPlacement = newPlacement.replace('left', 'right') as PlacementType;
		if (top + oheight > window.innerHeight)
			newPlacement = newPlacement.replace('bottom', 'top') as PlacementType;
		if (left + owidth > window.innerWidth)
			newPlacement = newPlacement.replace('right', 'left') as PlacementType;

		const adjusted = getTopLeft(newPlacement);
		result.left = adjusted.left;
		result.top = adjusted.top;
		realPlacement = newPlacement;
	}

	// Ensure within viewport
	result.left = Math.max(0, result.left);
	result.top = Math.max(0, result.top);

	if (typeof beforePosition === 'function') {
		result = beforePosition(result, {
			target: { width: twidth, height: theight },
			placement: realPlacement,
		});
	}

	return result;
}
