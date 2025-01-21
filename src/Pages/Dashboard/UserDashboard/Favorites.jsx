import {useContext} from "react";
import AuthContext from "../../../Provider/AuthContext";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import {useQuery} from "@tanstack/react-query";

const Favorites = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();

  // ? get favorite collection from backend using tanstack

  const {data: favorites = [], refetch} = useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/favorite/${user?.email}`);
      return response.data;
    },
  });

  console.log(favorites);

  //! Handle delete action
  const handleDelete = (id) => {
    axiosPublic.delete(`/favorite/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Favourites Biodata</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">BioData Id</th>
              <th className="border px-4 py-2">Permanent Address</th>
              <th className="border px-4 py-2">Occupation</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.bioDAtaId}</td>
                <td className="border px-4 py-2">{item.permanentAddress}</td>
                <td className="border px-4 py-2">{item.occupation}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorites;
