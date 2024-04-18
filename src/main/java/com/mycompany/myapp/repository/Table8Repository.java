package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table8;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table8 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table8Repository extends JpaRepository<Table8, Long> {}
