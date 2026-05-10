import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (password !== confirm) {
      setError('ERROR: Password do not match!');
    } else {
      setError('');
      router.push('/');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <View style={styles.logoWrapper}>
        <View style={styles.logoCircle}>
          <MaterialCommunityIcons name="heart-pulse" size={38} color="#fff" />
        </View>
      </View>

      {/* Heading */}
      <Text style={styles.title}>Sign Up For Free</Text>

      {/* Email */}
      <Text style={styles.label}>Email Address</Text>
      <View style={styles.inputBox}>
        <Feather name="mail" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email..."
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={[styles.inputBox, error ? styles.inputBoxError : null]}>
        <Feather name="lock" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password..."
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={(t) => { setPassword(t); setError(''); }}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? 'eye' : 'eye-off'} size={18} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <Text style={styles.label}>Password Confirmation</Text>
      <View style={[styles.inputBox, error ? styles.inputBoxError : null]}>
        <Feather name="lock" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Re-enter your password..."
          placeholderTextColor="#aaa"
          value={confirm}
          onChangeText={(t) => { setConfirm(t); setError(''); }}
          secureTextEntry={!showConfirm}
        />
        <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
          <Feather name={showConfirm ? 'eye' : 'eye-off'} size={18} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Error Banner */}
      {error ? (
        <View style={styles.errorBox}>
          <Feather name="alert-triangle" size={14} color="#c0392b" style={{ marginRight: 6 }} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up  →</Text>
      </TouchableOpacity>

      {/* Bottom Link */}
      <Text style={styles.bottomText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => router.push('/')}>
          Sign In.
        </Text>
      </Text>

    </SafeAreaView>
  );
}

const GREEN = '#5DC90E';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  /* Logo */
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Heading */
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 28,
  },

  /* Inputs */
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 16,
  },
  inputBoxError: {
    borderColor: '#e74c3c',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111',
  },

  /* Error */
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fde8e8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    color: '#c0392b',
    fontSize: 13,
    fontWeight: '600',
  },

  /* Button */
  button: {
    backgroundColor: GREEN,
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  /* Bottom */
  bottomText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
  },
  link: {
    color: GREEN,
    fontWeight: '600',
  },
});
