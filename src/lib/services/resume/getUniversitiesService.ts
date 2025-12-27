interface res {
  country: string;
  name: string;
  web_pages: string[];
  domains: string[];
  state_province: string;
}

export async function getUniversities(q: string): Promise<res[]> {
  try {
    const res = await fetch(
      `http://universities.hipolabs.com/search?name=${q}&limit=10`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
