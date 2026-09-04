import type { ReactNode } from 'react';

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(!\[[^\]]*\]\([^\)]+\)|\[[^\]]+\]\([^\)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const image = part.match(/^!\[([^\]]*)\]\(([^\)]+)\)$/);
    if (image) {
      const [, alt = '', src = ''] = image;
      return <img key={index} src={src} alt={alt} loading="lazy" />;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (link) {
      const [, label = '', href = ''] = link;
      const external = href.startsWith('http');
      return (
        <a
          key={index}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {label}
        </a>
      );
    }

    const code = part.match(/^`([^`]+)`$/);
    if (code) return <code key={index}>{code[1]}</code>;

    const strong = part.match(/^\*\*([^*]+)\*\*$/);
    if (strong) return <strong key={index}>{strong[1]}</strong>;

    return part;
  });
}

export function Markdown({ content }: { content: string }) {
  const lines = content.split('\n');
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index]?.trim() ?? '';

    if (!line) {
      index += 1;
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\(([^\)]+)\)$/);
    if (image) {
      const [, alt = '', src = ''] = image;
      nodes.push(
        <figure key={index}>
          <img src={src} alt={alt} loading="lazy" />
        </figure>
      );
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      nodes.push(<h2 key={index}>{renderInline(line.slice(3))}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      nodes.push(<h3 key={index}>{renderInline(line.slice(4))}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith('- ')) {
      const items: ReactNode[] = [];
      while (lines[index]?.trim().startsWith('- ')) {
        items.push(
          <li key={index}>{renderInline((lines[index] ?? '').trim().slice(2))}</li>
        );
        index += 1;
      }
      nodes.push(<ul key={`list-${index}`}>{items}</ul>);
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index]?.trim() &&
      !lines[index]?.trim().startsWith('## ') &&
      !lines[index]?.trim().startsWith('### ') &&
      !lines[index]?.trim().startsWith('- ') &&
      !lines[index]?.trim().startsWith('![')
    ) {
      paragraph.push(lines[index]?.trim() ?? '');
      index += 1;
    }

    nodes.push(<p key={index}>{renderInline(paragraph.join(' '))}</p>);
  }

  return <div className="markdown">{nodes}</div>;
}
