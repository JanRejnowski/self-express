package com.example.selfexpressbackend.repository;

import com.example.selfexpressbackend.models.Role;
import com.example.selfexpressbackend.models.RoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleEnum name);
}
