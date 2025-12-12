#!/usr/bin/env node

/**
 * Script untuk test koneksi ke backend API
 * Usage: node scripts/test-api.js
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080';

const endpoints = [
  { name: 'Projects', url: '/api/projects' },
  { name: 'Projects Categories', url: '/api/projects/categories' },
  { name: 'About Cards', url: '/api/about' },
  { name: 'Skills', url: '/api/skills' },
  { name: 'Skills Page Data', url: '/api/skills/page-data' },
  { name: 'Contact', url: '/api/contact' },
];

async function testEndpoint(name, url) {
  try {
    const fullUrl = `${API_BASE_URL}${url}`;
    console.log(`\n🔍 Testing: ${name}`);
    console.log(`   URL: ${fullUrl}`);
    
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.log(`   ❌ Status: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.log(`   Error: ${errorText.substring(0, 200)}`);
      return false;
    }

    const data = await response.json();
    
    // Handle API response wrapper
    let result = data;
    if (data.success !== undefined) {
      if (!data.success) {
        console.log(`   ❌ API returned success: false`);
        console.log(`   Error: ${data.error || data.message}`);
        return false;
      }
      result = data.data;
    }

    // Check if data exists
    if (Array.isArray(result)) {
      console.log(`   ✅ Success! Received ${result.length} items`);
      if (result.length > 0) {
        console.log(`   Sample: ${JSON.stringify(result[0]).substring(0, 100)}...`);
      }
    } else if (result && typeof result === 'object') {
      console.log(`   ✅ Success! Received data object`);
      console.log(`   Keys: ${Object.keys(result).join(', ')}`);
    } else {
      console.log(`   ✅ Success! Received data`);
    }

    return true;
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    if (error.message.includes('ECONNREFUSED') || error.message.includes('fetch failed')) {
      console.log(`   💡 Backend mungkin tidak berjalan di ${API_BASE_URL}`);
      console.log(`   💡 Pastikan backend Golang sudah running dan CORS sudah dikonfigurasi`);
    }
    return false;
  }
}

async function runTests() {
  console.log('🚀 Testing Backend API Connection');
  console.log(`📍 Base URL: ${API_BASE_URL}`);
  console.log('='.repeat(60));

  const results = [];
  
  for (const endpoint of endpoints) {
    const success = await testEndpoint(endpoint.name, endpoint.url);
    results.push({ name: endpoint.name, success });
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Test Results Summary:');
  console.log('='.repeat(60));
  
  const successCount = results.filter(r => r.success).length;
  const totalCount = results.length;
  
  results.forEach(result => {
    const icon = result.success ? '✅' : '❌';
    console.log(`${icon} ${result.name}`);
  });
  
  console.log('='.repeat(60));
  console.log(`Total: ${successCount}/${totalCount} endpoints successful`);
  
  if (successCount === totalCount) {
    console.log('🎉 All tests passed! Backend is connected and working.');
  } else if (successCount === 0) {
    console.log('⚠️  All tests failed. Please check:');
    console.log('   1. Backend is running on', API_BASE_URL);
    console.log('   2. CORS is configured correctly');
    console.log('   3. Environment variable NEXT_PUBLIC_API_BASE is set correctly');
  } else {
    console.log('⚠️  Some tests failed. Please check the errors above.');
  }
  
  process.exit(successCount === totalCount ? 0 : 1);
}

// Run tests
runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

