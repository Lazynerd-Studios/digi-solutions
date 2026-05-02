import re
for fn in ['ritovex-next/public/Modern Logo with Network Node Icon.svg', 'ritovex-next/public/Modern Logo with Network Node Icon(1).svg']:
    with open(fn, 'r', encoding='utf-8') as f:
        content = f.read()
    fills = re.findall(r'fill=["\']([^"\']+)["\']', content)
    strokes = re.findall(r'stroke=["\']([^"\']+)["\']', content)
    print(f'{fn}:')
    print(f'  fills: {set(fills) if fills else "none"}')
    print(f'  strokes: {set(strokes) if strokes else "none"}')
    print(f'  size: {len(content)} chars')
