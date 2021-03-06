exports.floor = {
  "@id": "dtmi:samples:Floor;1",
  "@type": "Interface",
  "@context": "dtmi:dtdl:context;2",
  displayName: "Floor",
  contents: [
    {
      "@type": "Relationship",
      name: "contains",
      target: "dtmi:samples:Room;1"
    },
    {
      "@type": "Property",
      name: "AverageTemperature",
      schema: "double"
    }
  ]
};
