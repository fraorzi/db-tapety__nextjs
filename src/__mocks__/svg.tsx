import type { SVGProps } from 'react';
import React from 'react';

const SvgrMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} {...props} />
));

export const ReactComponent = SvgrMock;
export default SvgrMock;
