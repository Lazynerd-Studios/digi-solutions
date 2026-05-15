import re, os
for root, dirs, files in os.walk('app'):
    for f in files:
        if f.endswith('.js'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
            imgs = re.findall(r'src=["\'](https?://[^"\']+)["\']', content)
            if imgs:
                print(f'{path}:')
                for img in imgs:
                    print(f'  {img}')
                print()
