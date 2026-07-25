import React, {useEffect, useRef} from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';

const languageFromClassName = className => {
  const match = className && className.match(/(?:^|\s)language-([^\s]+)/);
  return match ? match[1].toLowerCase() : '';
};

const ScratchBlock = ({children}) => {
  const container = useRef(null);
  const code = String(children).replace(/\n$/, '');

  useEffect(() => {
    let active = true;

    import('@nitro-bolt/scratchblocks').then(({default: scratchblocks}) => {
      if (!active || !container.current) return;

      const options = {
        style: 'scratch3',
        languages: ['en'],
        scale: 1,
      };
      const document = scratchblocks.parse(code, options);
      const svg = scratchblocks.render(document, options);
      scratchblocks.replace(container.current, svg, document, options);
    });

    return () => {
      active = false;
    };
  }, [code]);

  return (
    <div className="nitrobolt-scratchblocks" ref={container}>
      <pre>{code}</pre>
    </div>
  );
};

export default function CodeBlock({children, className, language, ...props}) {
  const blockLanguage = (language || languageFromClassName(className)).toLowerCase();

  if (blockLanguage === 'scratch') {
    return <ScratchBlock>{children}</ScratchBlock>;
  }

  return (
    <OriginalCodeBlock className={className} language={language} {...props}>
      {children}
    </OriginalCodeBlock>
  );
}
