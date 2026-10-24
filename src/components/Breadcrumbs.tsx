import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link href="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator" aria-hidden="true">/</span>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="breadcrumb-item">
              {isLast || !item.href ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="breadcrumb-link">
                    {item.label}
                  </Link>
                  <span className="breadcrumb-separator" aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
