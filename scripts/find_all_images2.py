import re, os
for root, dirs, files in os.walk('app'):
    for f in files:
        if f.endswith('.js'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
            imgs = re.findall(r'https?://[^\s\'"\>\)]+\.(?:jpg|jpeg|png|svg|gif|webp)', content)
            if imgs:
                print(f'{path}:')
                for img in set(imgs):
                    print(f'  {img}')
