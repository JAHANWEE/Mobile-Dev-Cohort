import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
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

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <View style={styles.logoWrapper}>
        <View style={styles.logoCircle}>
          <MaterialCommunityIcons name="heart-pulse" size={38} color="#fff" />
        </View>
      </View>

      {/* Heading */}
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Let's experience the joy of telecare AI.</Text>

      {/* Email */}
      <Text style={styles.label}>Email Address</Text>
      <View style={[styles.inputBox, emailFocused && styles.inputBoxFocused]}>
        <Feather name="mail" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email..."
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputBox}>
        <Feather name="lock" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password..."
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? 'eye' : 'eye-off'} size={18} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign In Completed!')}>
        <Text style={styles.buttonText}>Sign In  →</Text>
      </TouchableOpacity>

      {/* Social Icons */}
      <View style={styles.socialRow}>
        <View style={styles.socialBtn}>
          <FontAwesome name="facebook" size={20} color="#333" />
        </View>
        <View style={styles.socialBtn}>
          <FontAwesome name="google" size={20} color="#333" />
        </View>
        <View style={styles.socialBtn}>
          <FontAwesome name="instagram" size={20} color="#333" />
        </View>
      </View>

      {/* Bottom Links */}
      <Text style={styles.bottomText}>
        Don't have an account?{' '}
        <Text style={styles.link} onPress={() => router.push('/sign-up')}>
          Sign Up.
        </Text>
      </Text>
      <Text style={styles.link} onPress={() => {}}>
        Forgot your password?
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
    fontSize: 32,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
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
    marginBottom: 20,
  },
  inputBoxFocused: {
    borderColor: GREEN,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111',
  },

  /* Button */
  button: {
    backgroundColor: GREEN,
    borderRadius: 14,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  /* Social */
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 28,
  },
  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1.5,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  /* Bottom */
  bottomText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  link: {
    color: GREEN,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
  },
});
