export async function getRules(): Promise<string> {
  const res = await fetch('http://46.101.221.8/rules', {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    return '';
  }

  return res.json().then(data => data?.rules);
}

const rulesService = {
  getRules
};

export default rulesService;
