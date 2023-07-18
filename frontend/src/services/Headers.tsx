export const getHeader = (includeContentType = false) => {
    const token = localStorage.getItem("accessToken");
    const headers:{[key: string]: string } = {
      'Authorization': `Bearer ${token}`,
      'Content-Type':includeContentType?'text/plain':'application/json'
    };
    return headers;
  };
  