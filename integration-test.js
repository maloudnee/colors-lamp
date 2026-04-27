const parseSearchResponse = (jsonString) => {
  const data = JSON.parse(jsonString);
  if (!data.results) throw new Error("Invalid Format");
  return data.results;
};

test('Integration: Validates JSON structure from Search API', () => {
    const mockApiResponse = JSON.stringify({
        results: ["Blue", "Green", "Red"],
        error: ""
    });
    const results = parseSearchResponse(mockApiResponse);
    expect(Array.isArray(results)).toBe(true);
    expect(results).toContain("Blue");
});
