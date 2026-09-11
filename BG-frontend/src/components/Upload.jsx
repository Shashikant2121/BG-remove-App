import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [output, setOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate(); 

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      alert("Please select an image file (PNG, JPG, JPEG)");
      return;
    }

    setFile(selected);
    setOutput("");
    const url = URL.createObjectURL(selected);
    setPreview(url);
  };

  const handleRemoveBg = async () => {
    if (!file) return;

    setIsProcessing(true);
    setOutput("");

    try {
      const formData = new FormData();
      formData.append("image_file", file);

      const res = await fetch("https://clipdrop-api.co/remove-background/v1", {
        method: "POST",
        headers: {
          "x-api-key":
            "e595074ac9bd00303a20c5f8ea7b711b646a8704c9d6f4385d575679a83487a85b01492bcb0386a9235ed46d321a6e69",
        },
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("ClipDrop error body:", errText);
        throw new Error("API error");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      setOutput(url);

      navigate("/result", { state: { outputUrl: url } });
    } catch (error) {
      console.error(error);
      alert("Something went wrong while removing background");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="w-full py-10 px-6 bg-blue-50 min-h-[80vh]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Upload your image
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-indigo-300 bg-white rounded-2xl px-4 py-10 cursor-pointer hover:border-indigo-500 transition">
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  PNG, JPG up to 5MB
                </p>
              </div>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {preview && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Selected image
                </p>
                <div className="rounded-2xl overflow-hidden border bg-white">
                  <img
                    src={preview}
                    alt="Selected preview"
                    className="w-full h-64 object-contain bg-slate-100"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleRemoveBg}
              disabled={!file || isProcessing}
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isProcessing ? "Removing background..." : "Remove Background"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;
