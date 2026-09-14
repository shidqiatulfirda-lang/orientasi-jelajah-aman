import { View, Text } from "react-native";
import { LaporanUdara } from "../../types/cuaca";

export default function IndikatorAQI({
  kota,
  indeksAQI,
  tingkat,
  diperbaruiPada,
}: LaporanUdara) {
  const warnaTeks =
    tingkat === "BAIK"
      ? "green"
      : tingkat === "SEDANG"
        ? "orange"
        : tingkat === "TIDAK_SEHAT"
          ? "red"
          : "purple";

  return (
    <View
      style={{
        padding: 12,
        borderTopWidth: 1,
        borderColor: "#ccc",
        marginTop: 8,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>Laporan Kualitas Udara {kota}</Text>
      <Text>Indeks AQI: {indeksAQI}</Text>
      <Text style={{ color: warnaTeks, fontWeight: "bold" }}>
        Status: {tingkat}
      </Text>
      {diperbaruiPada && (
        <Text style={{ fontSize: 12, color: "gray" }}>
          Diperbarui pada: {diperbaruiPada}
        </Text>
      )}
    </View>
  );
}
