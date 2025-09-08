import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import axiosAuth from "../utils/axiosAuth";

const useUsers = () => {
  const [allUsers, setAllUsers] = useState([]); // Store all users
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users for display
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 10;

  // Fetch all users once
  const fetchAllUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosAuth.get("/auth/admin/users");
      const responseData = response.data;
      
      console.log("API Response:", responseData);
      
      let usersArray = [];
      
      // Handle different response structures
      if (responseData.users && Array.isArray(responseData.users)) {
        usersArray = responseData.users;
      } else if (Array.isArray(responseData)) {
        usersArray = responseData;
      }
      
      setAllUsers(usersArray);
      setFilteredUsers(usersArray); // Initially, show all users
      
    } catch (err) {
      console.error("Error fetching users:", err);
      const errorMessage = err.response?.data?.detail || err.message || "Failed to fetch users";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter users based on search term
  const filterUsers = useCallback((term) => {
    if (!term.trim()) {
      setFilteredUsers(allUsers);
      setCurrentPage(1); // Reset to first page when search is cleared
      return;
    }

    const lowerCaseTerm = term.toLowerCase();
    const filtered = allUsers.filter(user =>
      user.email?.toLowerCase().includes(lowerCaseTerm) ||
      user.full_name?.toLowerCase().includes(lowerCaseTerm) ||
      user.phone?.toLowerCase().includes(lowerCaseTerm) ||
      user.id?.toString().includes(lowerCaseTerm)
    );
    
    setFilteredUsers(filtered);
    setCurrentPage(1); // Always go to first page after search
  }, [allUsers]);

  // Handle search with debouncing
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    filterUsers(term);
  }, [filterUsers]);

  // Get users for current page
  const getPaginatedUsers = useCallback(() => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  }, [currentPage, filteredUsers, usersPerPage]);

  // Handle page change
  const handlePageChange = useCallback((direction) => {
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }, [currentPage, filteredUsers.length, usersPerPage]);

  const refreshUsers = useCallback(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return {
    users: getPaginatedUsers(), // Return only users for current page
    allUsers: filteredUsers, // Return all filtered users for total count
    loading,
    error,
    totalUsers: filteredUsers.length, // Total filtered users
    currentPage,
    usersPerPage,
    searchTerm,
    fetchAllUsers,
    handleSearch,
    handlePageChange,
    refreshUsers,
  };
};

export default useUsers;