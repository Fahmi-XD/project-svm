import { goto } from '$app/navigation';

export function Intent(url: string) {
  goto(url, {
    replaceState: true,
    noScroll: true,
  });
}
