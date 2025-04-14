
interface Props {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
  address: string;
  setAddress: (val: string) => void;
  errors: { [key: string]: string };
}

const PersonalForm = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  errors,
}: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Personal information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border p-2 rounded w-full ${errors.name ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border p-2 rounded w-full ${errors.email ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`border p-2 rounded w-full ${errors.phone ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={`border p-2 rounded w-full h-24 resize-none ${errors.address ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>
    </div>
  );
};

export default PersonalForm;
